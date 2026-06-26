//variables
//var
//let
//const
//datatypes
//string
let str: string = "abc";
//number
let num: number = 123;
//boolean
let bool: boolean = true;
//null
let n: null = null;
//undefined
let u: undefined = undefined;

//special data types
//any(rarery used.)
let anyVar: any;
//by default anyVar is of type any, so any value can be assigned to it
anyVar = "abc";
anyVar = 123;
//console.log(anyVar.toUpperCase());
//unknown
let unknownVar: unknown;
//by default unknownVar is of type unknown, so any value can be assigned to it
unknownVar = "abc";
unknownVar = 123;
//console.log(unknownVar.toUpperCase()); // Error: Object is of type 'unknown'.
//this is main difference between any and unknown,
//any allows you to perform any operation on it, while unknown does not allow any operation until you perform type checking or type assertion
//void
let v: void;
//never

//type inference
let a = 12;
// a='';

//type annotation
let b: string;
b = "abc";
console.log(a, b, str, num, bool, n, u, anyVar, unknownVar, v);

//array
//let numbers: number[] = [1,2,3,"abc",5];// Error: Type 'string' is not assignable to type 'number'.
let numbers: number[] = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
numbers.push(7);
console.log(numbers); //[1, 2, 3, 4, 5, 6, 7]

//string array
let strings: string[] = ["a", "b", "c"];
console.log(strings);
strings.push("d");
console.log(strings); //["a", "b", "c", "d"]

//tuple
let tuple: [string, number, string, string, number] = [
  "abc",
  123,
  "def",
  "ghi",
  5,
];
console.log(tuple);

//users
let user: [string, number, string, string, number][] = [
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
  ["ram", 10, "ram@gmail.com", "c plus", 30],
];
console.log(user);
//objects
//type alias
//type litral
//function
//class
//generic type
//interface
