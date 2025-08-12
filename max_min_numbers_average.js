let numbers = [5, 8, 12, 20, 3, 15, 7, 2005, 18, 10];

/* Find max  min numbers */

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log("Minimum:", min);
console.log("Maximum:", max);

/* Average of all numbers */

let total = numbers.reduce((acc, num)=> acc + num, 0);
let average = total / numbers.length;

console.log("Total of all numbers:", total);
console.log("Average:", average);