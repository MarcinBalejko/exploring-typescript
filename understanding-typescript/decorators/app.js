"use strict";
// 1.) A FIRST CLASS DECORATOR
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
function Autobind(_, _2, descriptor) {
    const originalMethod = descriptor.value;
    const adjDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this); // here 'this' will always refer to the object that we defined 'get' on
            return boundFn;
        },
    };
    return adjDescriptor; // this will overwrite the old descriptor
}
class Printer {
    constructor() {
        this.message = "This works!";
    }
    showMessage() {
        console.log(this.message);
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
