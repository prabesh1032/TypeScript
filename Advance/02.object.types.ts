// ============================================================
//  TYPESCRIPT: OBJECTS, TYPE ALIAS, UNION, INTERSECTION,
//              LITERAL TYPES, FUNCTIONS, INTERFACE, GENERICS
//  Day 6 — MERN Stack Learning
// ============================================================


// ============================================================
//  1. OBJECT TYPE (inline) — gets messy with repetition
// ============================================================

let product: { id: number; name: string; description: string; price: number } = {
    id: 1,
    name: "Laptop",
    description: "Gaming laptop",
    price: 1200,
};

// Problem: writing this shape again for product2 is repetitive
// This is exactly why TYPE ALIAS exists


// ============================================================
//  2. TYPE ALIAS  ⭐ — reusable named shape
// ============================================================

type TProduct = {
    readonly id: number;     // readonly = cannot be changed after creation
    name: string;
    description?: string;    // ? = optional property
    price: number;
};

let product3: TProduct = {
    id: 3,
    name: "Phone",
    description: "Smartphone",
    price: 500,
};

product3.name = "Updated Phone Name"; // ✅ allowed
// product3.id = 99;                  // ❌ Error — readonly cannot be reassigned

let product4: TProduct = {
    id: 4,
    name: "Tablet",
    price: 300,
    // description omitted — fine, it's optional (?)
};


// ============================================================
//  3. UNION TYPE  ( | )  — value can be ONE of several types
// ============================================================

let id: number | string | boolean;
id = "ABC123"; // ✅
id = 123;      // ✅
id = true;     // ✅
// id = [];     // ❌ Error — not one of the allowed types

// reusable with type alias
type ID = number | string;
let userId: ID = "u_001";


// ============================================================
//  4. INTERSECTION TYPE  ( & )  — combine multiple types into ONE
// ============================================================

type A = { a: string };
type B = { b: string };

// Must have BOTH a and b — intersection combines requirements
let combined: A & B = {
    a: "value A",
    b: "value B",
};

// Extend an existing type with intersection
type D = A & { d: string };

let dObj: D = {
    a: "value A",
    d: "value D",
};

// ⚠️  Union (|) = "either/or" — Intersection (&) = "both/all"


// ============================================================
//  5. LITERAL TYPES  ⭐ — restrict to EXACT specific values
// ============================================================

// Instead of just "string", restrict to specific allowed strings only
type Status = "pending" | "success" | "failed";

let responseStatus: Status;
responseStatus = "pending"; // ✅
responseStatus = "success"; // ✅
// responseStatus = "done";  // ❌ Error — not one of the allowed literals

// ⭐ Used CONSTANTLY in React for prop types:
// type ButtonVariant = "primary" | "secondary" | "danger";


// ============================================================
//  6. FUNCTIONS WITH TYPES  ⭐
// ============================================================

// Parameter types + return type annotation
const greet = (name: string): void => {
    console.log("Hello", name);
};
greet("Ram");
// greet(123); // ❌ Error — expects string

const add = (a: number, b: number): number => {
    return a + b;
};
console.log(add(10, 20)); // 30

// FUNCTION TYPE — define the shape of a function as a type alias
type GreetFunction = (name: string) => void;

const sayHi: GreetFunction = (name) => {
    console.log("Hi", name); // TS already knows 'name' is string
};
sayHi("Prabesh");

// ⭐ Very useful for passing functions as props in React:
// type OnClickHandler = (id: number) => void;


// ============================================================
//  7. INTERFACE  ⭐ — defines the SHAPE of an object
// ============================================================

interface IUser {
    _id: string | number;
    name: string;
    email: string;
    password: string;
    phone?: string;       // optional
}

let user1: IUser = {
    _id: "1",
    name: "Ram",
    email: "ram@gmail.com",
    password: "pass123",
    // phone omitted — fine, optional
};

// Interface can also describe function shapes
interface MathOperation {
    (a: number, b: number): number;
}
const multiply: MathOperation = (a, b) => a * b;


// ============================================================
//  8. TYPE vs INTERFACE — most asked TS interview question
// ============================================================

// Both can describe object shapes — very similar, but key differences:

// 1. Interface can be "re-opened" and extended later (declaration merging)
interface Car {
    brand: string;
}
interface Car {        // same name — TS MERGES these automatically
    model: string;
}
let myCar: Car = { brand: "Toyota", model: "Corolla" }; // needs BOTH

// type CANNOT do this — duplicate type name = Error
// type Car = { brand: string };
// type Car = { model: string }; // ❌ Error: Duplicate identifier 'Car'

// 2. type can represent union/intersection/primitives — interface cannot
type Status2 = "active" | "inactive";  // ✅ type can do this
// interface Status2 = "active" | "inactive"; // ❌ interface CANNOT do this

// 3. interface is generally preferred for OBJECT SHAPES (especially in React props)
//    type is preferred for UNIONS, INTERSECTIONS, and primitive aliases

//  Feature                  | type | interface
//  -------------------------|------|------------
//  Object shape             | ✅   | ✅
//  Union types              | ✅   | ❌
//  Intersection             | ✅   | partial (extends)
//  Declaration merging      | ❌   | ✅
//  Extending another shape  | &    | extends


// ============================================================
//  9. GENERIC TYPES  ⭐⭐ — reusable types that work with ANY type
// ============================================================

// Problem: writing separate interfaces for every value type is repetitive
// interface StringBox { value: string }
// interface NumberBox { value: number }
// ... too much repetition

// Solution: GENERIC — <T> is a placeholder for "whatever type you give me"
interface IBox<T> {
    value: T;
}

let stringBox: IBox<string> = { value: "hello" };
let numberBox: IBox<number> = { value: 42 };
let arrayBox: IBox<number[]> = { value: [1, 2, 3] };

let objectBox: IBox<{ x: number; y: string }> = {
    value: { x: 10, y: "test" },
};

let functionBox: IBox<(x: number) => number> = {
    value: (x) => x * 2,
};

// ⭐ Generic functions — same idea applied to functions
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("hello")); // "hello" — T = string
console.log(identity<number>(42));      // 42      — T = number
console.log(identity(true));            // true    — TS infers T = boolean automatically

// ⭐ React uses generics constantly:
// useState<string>("")
// useState<User | null>(null)
// Array<T>, Promise<T> are also generics you already use


// ============================================================
//  INTERVIEW QUESTIONS
// ============================================================

// Q1: Difference between type and interface?
//     -> interface supports declaration merging, type doesn't
//     -> type supports union/intersection of primitives, interface doesn't
//     -> Use interface for object shapes, type for unions/primitives

// Q2: What does readonly do?
//     -> Property can be set once (usually at creation), cannot be reassigned later

// Q3: What does ? mean after a property name?
//     -> Marks the property as OPTIONAL — can be omitted when creating the object

// Q4: Difference between union (|) and intersection (&)?
//     -> union: value can be ONE of the listed types
//     -> intersection: value must satisfy ALL listed types at once

// Q5: What is a literal type?
//     -> Restricts a value to specific exact values, not just a general type
//     -> type Status = "pending" | "success" | "failed"

// Q6: What is a generic type?
//     -> A reusable type/function that works with ANY type, decided at usage time
//     -> Avoids writing separate versions for string, number, object, etc.

// Q7: Where do you use generics in real React code?
//     -> useState<T>(), useRef<T>(), typed API response handling, custom hooks