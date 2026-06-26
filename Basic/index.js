"use strict";
//variables
//var
//let
//const
//datatypes
//string
let str = "abc";
//number
let num = 123;
//boolean
let bool = true;
//null
let n = null;
//undefined
let u = undefined;
//special data types
//any(rarery used.)
let anyVar;
//by default anyVar is of type any, so any value can be assigned to it
anyVar = "abc";
anyVar = 123;
//console.log(anyVar.toUpperCase()); 
//unknown
let unknownVar;
//by default unknownVar is of type unknown, so any value can be assigned to it
unknownVar = "abc";
unknownVar = 123;
//console.log(unknownVar.toUpperCase()); // Error: Object is of type 'unknown'.
//this is main difference between any and unknown, 
//any allows you to perform any operation on it, while unknown does not allow any operation until you perform type checking or type assertion
//void
let v;
//never
//type inference
let a = 12;
// a='';
//type annotation
let b;
b = "abc";
console.log(a, b, str, num, bool, n, u, anyVar, unknownVar, v);
//array
//let numbers: number[] = [1,2,3,"abc",5];// Error: Type 'string' is not assignable to type 'number'.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
numbers.push(7);
console.log(numbers); //[1, 2, 3, 4, 5, 6, 7]
//string array
let strings = ["a", "b", "c"];
console.log(strings);
strings.push("d");
console.log(strings); //["a", "b", "c", "d"]
//tuple
let tuple = ["abc", 123, "def", "ghi", 5];
console.log(tuple);
