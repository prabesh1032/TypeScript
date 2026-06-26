// ============================================================
//  TYPESCRIPT: VARIABLES & DATA TYPES
//  Day 6 — MERN Stack Learning (M-E-R-N + TS)
// ============================================================

// TypeScript = JavaScript + static typing
// Catches errors at COMPILE TIME, before code even runs
// Same var/let/const rules as JS — TS just adds TYPES on top

// ============================================================
//  1. BASIC TYPES
// ============================================================

let str: string = "abc";
let num: number = 123;
let bool: boolean = true;
let n: null = null;
let u: undefined = undefined;

// str = 123;        // ❌ Error: Type 'number' is not assignable to type 'string'
// TypeScript catches this BEFORE running — JS would only fail at runtime (or not at all)

// ============================================================
//  2. any  vs  unknown  ⭐ (classic interview question)
// ============================================================

// any — disables type checking completely (escape hatch, avoid using)
let anyVar: any;
anyVar = "abc";
anyVar = 123;
console.log(anyVar.toUpperCase()); // ✅ no error — even though number doesn't have toUpperCase
// TS won't catch this bug until it crashes at RUNTIME

// unknown — safer alternative, forces you to check type first
let unknownVar: unknown;
unknownVar = "abc";
unknownVar = 123;
// console.log(unknownVar.toUpperCase()); // ❌ Error: Object is of type 'unknown'

// Must narrow the type before using it:
if (typeof unknownVar === "string") {
  console.log(unknownVar.toUpperCase()); // ✅ works — TS knows it's a string here
}

// ⚠️  RULE: Always prefer unknown over any
// any = "trust me, don't check anything" (dangerous)
// unknown = "I don't know yet, but check before using" (safe)

// ============================================================
//  3. void & never
// ============================================================

// void — function returns NOTHING
function logMessage(msg: string): void {
  console.log(msg);
  // no return statement
}

// never — function NEVER successfully returns (throws error or infinite loop)
function throwError(msg: string): never {
  throw new Error(msg);
}

function infiniteLoop(): never {
  while (true) {
    // runs forever, never returns
  }
}

// ⚠️  void = "returns nothing useful" | never = "never even finishes"

// ============================================================
//  4. TYPE INFERENCE vs TYPE ANNOTATION
// ============================================================

// Type INFERENCE — TS automatically figures out the type
let a = 12; // TS infers: number
// a = "hello";       // ❌ Error — TS remembers a is number

// Type ANNOTATION — YOU explicitly declare the type
let b: string;
b = "abc";
// b = 123;           // ❌ Error — annotated as string

// ⚠️  Use annotation when declaring without immediate value,
// or when you want to be explicit for readability

// ============================================================
//  5. ARRAYS  ⭐
// ============================================================

let numbers: number[] = [1, 2, 3, 4, 5];
// let numbers: number[] = [1, 2, "abc"]; // ❌ Error — string not allowed

numbers.push(6); // ✅ allowed — still a number
// numbers.push("7"); // ❌ Error

let names: string[] = ["Ram", "Sita", "Hari"];

// Alternative syntax (same meaning, less common)
let scores: Array<number> = [80, 90, 75];

// ============================================================
//  6. TUPLE  ⭐ — fixed length, fixed type order
// ============================================================

// Array with FIXED number of elements, each with a SPECIFIC type
let tuple: [string, number, boolean] = ["Prabesh", 22, true];

// console.log(tuple[3]); // ❌ Error — only 3 positions exist
// tuple = [22, "Prabesh", true]; // ❌ Error — wrong order/types

// Real use case — representing a fixed-shape record
let userRecord: [string, number, string] = ["Ram", 25, "ram@gmail.com"];
//                name     age     email

// Array of tuples — multiple fixed-shape records
let users: [string, number, string][] = [
  ["Ram", 25, "ram@gmail.com"],
  ["Sita", 23, "sita@gmail.com"],
];
console.log(users);

// ⚠️  Tuple vs Array:
// Array   -> any length, all elements SAME type
// Tuple   -> fixed length, elements can be DIFFERENT types in fixed order

// ============================================================
//  TYPE COMPARISON TABLE
// ============================================================

//  Type     | Use case                          | Example
//  ---------|-----------------------------------|----------------------
//  string   | text                              | "hello"
//  number   | integers and floats (no separate) | 10, 10.5
//  boolean  | true/false                        | true
//  any      | disable checking (avoid)          | could be anything
//  unknown  | safe "don't know yet"              | check before use
//  void     | function returns nothing          | console.log()
//  never    | function never returns             | throw, infinite loop
//  tuple    | fixed length, mixed types          | [string, number]
//  array    | any length, same type              | number[]

// ============================================================
//  INTERVIEW QUESTIONS
// ============================================================

// Q1: Difference between any and unknown?
//     -> any disables type checking completely — unsafe
//     -> unknown forces you to check the type before using it — safe

// Q2: Difference between void and never?
//     -> void: function returns nothing (but completes normally)
//     -> never: function never completes (throws error / infinite loop)

// Q3: Difference between tuple and array?
//     -> Array: any length, all elements must be same type
//     -> Tuple: fixed length, elements can have different types in fixed positions

// Q4: What is type inference?
//     -> TS automatically detects the type from the assigned value
//     -> let x = 10 → TS infers x: number automatically

// Q5: Why prefer unknown over any in real projects?
//     -> any completely disables TypeScript's safety — defeats the purpose
//     -> unknown keeps you safe by forcing a type check before use

// Q6: Does TypeScript run directly in the browser?
//     -> No — TypeScript is COMPILED (transpiled) to plain JavaScript first
//     -> Browsers only understand JS, not TS
