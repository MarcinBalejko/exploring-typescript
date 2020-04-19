// 1.) UNION TYPES
// function combine(input1: number | string, input2: number | string) {  // allows number or string here
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combinedAges = combine(30, 26);
// console.log(combinedAges);
// const combinedNames = combine("Max", "Anna");
// console.log(combinedNames);
// 2.) LITERAL TYPES
// function combine(
//   input1: number | string,
//   input2: number | string,
//   resultConversion: "as-number" | "as-text"
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number" // it has to be exactly what is specified in resultConversion above
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);
// const combinedStringAges = combine("30", 26, "as-number");
// console.log(combinedStringAges);
// const combinedNames = combine("Max", "Anna", "as-text");
// console.log(combinedNames);
// 3.) CUSTOM TYPES
// type Combinable = number | string;
// type ConversionDescriptor = "as-number" | "as-text";
// function combine(
//   input1: Combinable,
//   input2: Combinable,
//   resultConversion: ConversionDescriptor
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);
// const combinedStringAges = combine("30", 26, "as-number");
// console.log(combinedStringAges);
// const combinedNames = combine("Max", "Anna", "as-text");
// console.log(combinedNames);
// 4.) FUNCTION RETURN TYPES & VOID
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// function printResult(num: number): void {
//   //void - because we don't return anything
//   console.log("Result " + num);
// }
// printResult(add(5, 12));
// 5.) FUNCTIONS AS TYPES
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// function printResult(num: number): void {
//   console.log("Result: " + num);
// }
// printResult(add(5, 12));
// combineValues should take any function that takes 2 parameters which are numbers and which returns number
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
// combineValues = printResult;
// combineValues = 5;   // we would get error cause 5 is not a function
// console.log(combineValues(8, 8));
// 6.) FUNCTION TYPES & CALLBACKS
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// function printResult(num: number): void {
//   console.log("Result: " + num);
// }
// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }
// printResult(add(5, 12));
// let combineValues: (a: number, b: number) => number;
// combineValues = add;
// // combineValues = printResult;
// // combineValues = 5;
// console.log(combineValues(8, 8));
// addAndHandle(10, 20, (result) => {
//   console.log(result);
// });
// 7.) THE UNKNOWN TYPE
// let userInput: unknown;
// let userName: string;
// userInput = 5;
// userInput = "Max";
// // userName = userInput; // this would throw an error
// if (typeof userInput === "string") {
//   userName = userInput;
// }
// 8.) THE NEVER TYPE
var userInput;
var userName;
userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    // this function is intended to *never return anything
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
