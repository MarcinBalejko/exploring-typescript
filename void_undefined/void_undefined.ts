// void is like an opposite of any, we don't want to return any value at all
// function logData(): void {
//   console.log("Here is some data");
//   return "Hello";  // this will get error
// }
// logData();

// let x: void = null;

// let u: undefined = undefined;
// let n: null = null;

// console.log(n);

// function error(message: string): never {
//   throw new Error(message);
// }

// error("Something happened");

// function infLoop(): never {
//   while (true) {
//     console.log("Hello");
//   }
// }

function doSomething(): never {
  return "Hello";
}
