// 1. NUMBER
// console.log("Time to get started...");
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// const number1 = "5";
// const number2 = 2.8;
// const result = add(+number1, +number2);
// console.log(result);
//
// 1.1 NON-TYPESCRIPT WAY:
// function add(n1: number, n2: number) {
//   if (typeof n1 !== "number" || typeof n2 !== "number") {
//     throw new Error("Incorrect input");
//   } // basically adding typescript's types omits this (if) step.
//   return n1 + n2;
// }
// const number1 = "5";
// const number2 = 2.8;
// const result = add(number1, number2);
// console.log(result);
// 2. BOOLEANS:
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return result;
//   }
// }
// const number1 = 5; // 5.0
// const number2 = 2.8;
// const printResult = true;
// const resultPhrase = "Result is: ";
// const result = add(number1, number2, printResult, resultPhrase);
// 3. TYPE ASSIGNMENT & TYPE INFERENCE
// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   const result = n1 + n2;
//   if (showResult) {
//     console.log(phrase + result);
//   } else {
//     return result;
//   }
// }
// let number1: number; // stating that eventually a number will be here
// number1 = 5; // 5.0
// const number2 = 2.8;
// const printResult = true;
// let resultPhrase = "Result is: ";
// resultPhrase = 0;
// const result = add(number1, number2, printResult, resultPhrase);
//4. OBJECT TYPES & ARRAY TYPES
// {} = same as ... : object
// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
// };
// let favoriteActivities: string[];
// favoriteActivities = ["Sports"];
// console.log(person.name);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   // console.log(hobby.map()); // !!! THROWS ERROR !!!
// }
// 5. TUPLES
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
// person.role.push("admin");  // push is an exception allowed in tuple
// person.role[1] = 10;
person.role = [0, "admin", "user"]; // ERROR
