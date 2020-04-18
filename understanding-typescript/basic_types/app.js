// C O R E   T Y P E S
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
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
// // person.role.push("admin");  // push is an exception allowed in tuple
// // person.role[1] = 10;
// person.role = [0, "admin", "user"]; // ERROR
// 6. ENUM  (only existing in Typescript)
// a.) non-enum example:
// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2
// const person = {
//   name: "Maximilian",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: ADMIN
// };
//b.) enum example
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {})); // behind the scenes ADMIN = 0  READ_ONLY = 1 AUTHOR = 2
// if we type '{ ADMIN = 5, ... ' then the next element will be 6
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
