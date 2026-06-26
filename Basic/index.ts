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
let product: {
  id: number;
  name: string;
  description: string;
  price: number;
} = {
  id: 1,
  name: "products",
  description: "prodect",
  price: 1234,
};

let product2: { id: number; name: string; description: string; price: number } =
  {
    id: 2,
    name: "products2",
    description: "products2",
    price: 12345,
  };

//type alias
type Tproducts = {
  readonly id: number; //readonly make id unchangeable
  name: string;
  description?: string; //? means optional
  price: number;
};

let product3: Tproducts = {
  id: 3,
  name: "products3",
  description: "products3",
  price: 12345,
};
let product4: Tproducts = {
  id: 4,
  name: "products4",
  description: "products4",
  price: 12345,
};

product4.name = "productsss 44";
//product4.id=5; error because of readonly id.

//union
let id: number | string | boolean;
id = "one";
type ID = number | string | boolean;
let id2: ID; //using type alias

type Tuser = { name: string; email: string };
let uArr: Tuser[] = [
  {
    email: "e@gmail.com",
    name: "Ram",
  },
  {
    email: "f@gmail.com",
    name: "Ram",
  },
  {
    email: "g@gmail.com",
    name: "Ram",
  },
  {
    email: "h@gmail.com",
    name: "Ram",
  },
];

//intersection
type A = {
  a: string;
};
type B = {
  b: string;
};
let cObj: A & B = {
  a: "",
  b: "",
  //we need to use both a and b here.
};
type D = A & {
  d: string;
};
let dObj: A | B = {
  a: "", //if we can use a or b.
};

let dObj2: D = {
  a: "",
  d: "",
}; //need to use both A and D because in D type there is A & D

//type litral
//type TStatus="error" | "string" | "failed"
let responseStatus: "error" | "string" | "failed";
responseStatus = "error";
responseStatus = "failed";
responseStatus = "string";

//function
const greet = (name: string) => {
  console.log("hello", name);
};
greet("Ram");

const add = (a: number, b: number): number => {
  console.log(a + b);
  return a + b;
};
add(10, 20);
//greet(12334)//error
//class
//generic type
//interface
