<!--todo Dot notations and Bracet notations -->

1️⃣ Dot Notation (.)

Definition:
Dot notation is used to access properties of an object using a literal name after a dot ..

Syntax:

object.property


Example 1:

const person = {
    name: "Isha",
    age: 30
};

console.log(person.name); // Output: Isha
console.log(person.age);  // Output: 30


Example 2:

const car = {
    brand: "Toyota",
    model: "Corolla"
};

console.log(car.brand); // Toyota
console.log(car.model); // Corolla


Notes:

Simple and readable.

Only works if the property name is a valid identifier (no spaces, hyphens, or starting with a number).

2️⃣ Bracket Notation ([])

Definition:
Bracket notation is used to access properties of an object using a string inside square brackets.

Syntax:

object["property"]


Example 1:

const person = {
    name: "Isha",
    age: 30,
    "favorite color": "blue"
};

console.log(person["name"]);            // Isha
console.log(person["favorite color"]);  // blue


Example 2:

const car = {
    brand: "Toyota",
    model: "Corolla",
    "model year": 2020
};

console.log(car["model year"]); // 2020


Notes:

Can use variable names or strings with spaces, special characters, or numbers.

Useful when property names are dynamic.

Example with a variable:

const key = "age";
console.log(person[key]); // 30

✅ Key Differences
Feature	Dot Notation	Bracket Notation
Syntax	object.property	object["property"]
Works with spaces	❌ No	✅ Yes
Works with variables	❌ No	✅ Yes
Readability	✅ Easy	⚪ Slightly complex