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

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

const number1 = 5; // 5.0
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
