export {};

let myString: string;
let myNum: number;
let myBool: boolean;
let myVar: any;

// let strArr: string[];
// let numArr: number[];
// let boolArr: boolean[];

let strArr: Array<string>;
let numArr: Array<number>;
let boolArr: Array<boolean>;

// Tuple is an array with defined number of elements
let strNumTuple: [string, number];

myString = "Hello".slice(0, 3);
myNum = 22;
myBool = true;
myVar = 5;

strArr = ["Hello", "World"];
numArr = [1, 2, 3];
boolArr = [true, false, true];

strNumTuple = ["Hello", 4];

let myVoid: void = undefined;
let myNull: null = undefined;
let myUndefined: undefined = undefined;

console.log(myVoid);
// console.log(strArr);
