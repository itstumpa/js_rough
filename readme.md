  
  <!-- Note: This are highlight color options -->
  
   <!-- - -->
  <!-- todo -->
  <!-- fixme -->
  <!-- review -->
  <!-- idea -->
  <!-- note -->
  <!-- A -->







<!-- - Dot notations and Bracet notations -->

1️⃣ Dot Notation (.)

Definition:
Dot notation is used to access properties of an object using a literal name after a dot ..

Syntax:
object.property

Note: 
<!-- Example 1: -->

const person = {
    name: "Isha",
    age: 30
};

console.log(person.name); // Output: Isha
console.log(person.age);  // Output: 30


<!-- Example 2: -->

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


<!-- Example 2: -->

const car = {
    brand: "Toyota",
    model: "Corolla",
    "model year": 2020
};

console.log(car["model year"]); // 2020

<!-- A Array Methods in JavaScript -->
<!-- - array map, for each, filter, find, reduce difference between them? -->

✅ Quick Summary

forEach: Just loop (no return).

map: New array with changed values.

filter: New array with selected values.

find: First matching value.

reduce: Single value result.

<!-- - class and object? -->

🔑 Summary of Class & Object

Class → A blueprint/template (like a recipe).

Object → A real instance created from a class (like an actual cake made from the recipe).

Constructor → Special method that runs automatically when making an object, used to set properties.

Methods → Functions inside a class that describe behaviors of the object.

Each object created from a class is independent, but they all follow the same structure.


<!--- 🔑 Summary of Inheritance -->

Inheritance lets one class reuse code from another class.

extends → Keyword to make child inherit parent.

super() → Calls the parent constructor inside child class.

Parent methods can be used by child objects directly.

Child class can add new methods or override old ones.

👉 This keeps code reusable, clean, and avoids duplication.

<!--note: Encapsulation & this in JavaScript -->
<!--- 1️⃣ What is Encapsulation? -->

Encapsulation means bundling properties and methods inside a class so they work together.

It also means restricting direct access to some data (so no one can mess with it from outside).

In JS, we use private fields (#) or conventions like _propertyName to make data hidden.

👉 Think of it like a capsule: you can swallow the medicine (use the methods), but you can’t see or touch the raw powder inside (hidden properties).

<!--- 2️⃣ The this keyword -->

Inside a class or object, this refers to the current object.

It helps us access the properties and methods of that specific object.

If you make multiple objects from a class, this always points to the one that is currently running the method.
<!--- 🔑 Summary: Encapsulation & this -->

Encapsulation → Hides internal details, allows control via methods.

Private fields (#property) → Prevent direct access.

this → Refers to the current object instance.

Helps keep code organized, safe, and reusable.