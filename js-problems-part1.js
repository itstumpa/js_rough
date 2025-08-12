// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.


// function celsiusToFahrenheit(celsius){
//      return (celsius * 9/5) + 32; 
// }
// console.log(celsiusToFahrenheit(0));
// console.log(celsiusToFahrenheit(100));

// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// let numbers = [5,6,11,12,98, 5,5];

// function count_Dupli(arr, target){
//       let count = 0;
//  for (const num of arr) {
//       if (num === target) {
//             count++;
//       }
//  }
//  return count;
// }

// console.log(count_Dupli(numbers, 5));   
// console.log(count_Dupli(numbers, 25));  

// Task-3:
// Write a function to count the number of vowels in a string.

// function countVowel(str){
//       let count = 0;
//       let vowels = "aeiouAEIOU";

//       for (const char of str) {
//             if (vowels.includes(char)) {
//                   count++;
//             }
//       }
//       return count;
// }

// console.log(countVowel("Hello"));  // Output: 3
// console.log(countVowel("Javascript"));   // Output: 3



// Task-4:
// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// function findLongestWord(str) {
//   let words = str.split(' ');
//   let longest = '';

//   for (let word of words) {
//     if (word.length > longest.length) {
//       longest = word;
//     }
//   }

//   return longest;
// }

// console.log(findLongestWord("I am learning Programming to become a programmer"));  


// Task-5:
// Generate a random number between 10 to 20.

function getRandomNumber() {
  return Math.floor(Math.random() * (20 - 10 + 1)) + 10;
}

console.log(getRandomNumber());
