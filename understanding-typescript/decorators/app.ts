// 1.) A FIRST CLASS DECORATOR

// capital letter is optional here
// function Logger(constructor: Function) {
//   console.log("Logging...");
//   console.log(constructor);
// }

// @Logger
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// 2.) DECORATOR FACTORY

// function Logger(logString: string) {
//   return function (constructor: Function) {
//     console.log(logString);
//     console.log(constructor);
//   };
// }

// @Logger("LOGGING - PERSON") // the idea is that now we can pass in the values that our inner decorator function above will use
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// 3.) MORE USEFUL DECORATOR

// function WithTemplate(template: string, hookId: string) {
//   return function (constructor: any) {
//     const hookEl = document.getElementById(hookId);
//     const p = new constructor();
//     if (hookEl) {
//       hookEl.innerHTML = template;
//       hookEl.querySelector("h1")!.textContent = p.name;
//     }
//   };
// }

// // @Logger('LOGGING - PERSON')
// @WithTemplate("<h1>My Person Object</h1>", "app")
// class Person {
//   name = "Max";

//   constructor() {
//     console.log("Creating person object...");
//   }
// }

// const pers = new Person();

// console.log(pers);

// 4.) AUTOBIND DECORATOR

// function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
//   const originalMethod = descriptor.value;
//   const adjDescriptor: PropertyDescriptor = {
//     configurable: true,
//     enumerable: false,
//     get() {
//       const boundFn = originalMethod.bind(this); // here 'this' will always refer to the object that we defined 'get' on
//       return boundFn;
//     },
//   };
//   return adjDescriptor; // this will overwrite the old descriptor
// }

// class Printer {
//   message = "This works!";

//   @Autobind
//   showMessage() {
//     console.log(this.message);
//   }
// }

// const p = new Printer();

// const button = document.querySelector("button")!;
// button.addEventListener("click", p.showMessage);

// 5.) VALIDATION WITH DECORATORS

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);

  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
