// // export {};
// function getSum(num1: number, num2: number): number {
//   return num1 + num2;
// }
// // console.log(getSum(1, 4));
// let mySum = function (num1: any, num2: any): any {
//   if (typeof num1 == "string") {
//     num1 = parseInt(num1);
//   }
//   if (typeof num2 == "string") {
//     num2 = parseInt(num2);
//   }
//   return num1 + num2;
// };
// // console.log(mySum(3, 5));
// // '?' means optional
// function getName(firstName: string, lastName?: string): string {
//   if (lastName == undefined) {
//     return firstName;
//   }
//   return firstName + " " + lastName;
// }
// console.log(getName("John", "Doe"));
// function myVoid(): void {
//   return;
// }
// function add(x: number, y: number): number {
//   return x + y;
// }
// let myAdd = function (x: any, y: any): number {
//   if (typeof x == "string") {
//     x = parseInt(x, 10);
//   }
//   if (typeof y == "string") {
//     y = parseInt(y, 10);
//   }
//   return x + y;
// };
// // console.log(add(5, 5));
// console.log(myAdd("4", "4"));
// function getFullName(firstName: string, lastName?: string): string {
//   if (lastName == undefined) {
//     return firstName;
//   }
//   return firstName + " " + lastName;
// }
// * If we don't know how many args we will get, we can use 'rest' parameters
function getFullName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + "" + restOfName.join(" ");
}
var name1 = getFullName("John", "Doe", "Williams", "Johnson", "Jackson");
console.log(name1);
