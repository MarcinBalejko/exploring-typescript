// 1.) BUILT-IN GENERICS

// const names: Array<string> = []; // string[]
// // names[0].split(" ");

// const promise = new Promise<string>((resolve, reject) => {
//   setTimeout(() => {
//     // a promise that eventually will resolve to string
//     resolve("This is done!");
//   }, 2000);
// });

// promise.then((data) => {
//   data.split(" ");
// });

// 2.) GENERIC FUNCTIONS

// a.)
// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
// console.log(mergedObj.age);

// b.) CONSTRAINTS

// 'T extends object' - T can be any object with any structure but it HAS to be an object
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
// console.log(mergedObj.age);

// c.)

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["Sports", "Cooking"]));

// 3.)
