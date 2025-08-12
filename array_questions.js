// question-1
// Write a JavaScript code to reverse the array colors without using the reverse method.

// Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

// Output:

// ['orange', 'yellow', 'green', 'blue', 'red']


// const colors = ['red', 'blue', 'green', 'yellow', 'orange']
// const reversed = [];

// for (const num of colors) {
//       // console.log(num)
//       reversed.unshift(num)

// }


// console.log(reversed);
// console.log(colors)
// colors.reverse();
// console.log(colors)


// question-2
// Write a JavaScript code to get the even numbers from an array using any looping technique.

// Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

// Output:

// [12, 98, 76, 46]

// const numbers = [12, 98, 5, 41, 23, 78, 46];

// for (let i = 0; i < numbers.length; i++) {
//      if (numbers [i] % 2 === 0)
//       console.log(numbers[i])
// }


// Task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

// Output:

// 'TomTimTinTik'

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
// let combined = '';
// for (const num of numbers) {
//     combined += num;
      
// }
// console.log(combined);


// Task 4 (Hard)
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

// const statement = 'I am a hard working person'
// const words = statement.split(' ');

// words.reverse();
// const reversed = words.join(' ')

// console.log(reversed);


// Task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.

// Input: [1, 2, 3]

// Expected Output:

// Original: [1, 2, 3] Copy: [99, 2, 3]

/* This output only shows remove and add */

// let arr1 = [1, 2, 3];
// let remove = arr1.shift();
// let add = arr1.unshift(99);

// for (let i = 0; i < arr1.length; i++) { 
// }
// console.log(arr1)

// its the answer
// let original = [1, 2, 3];
// let copy = [99, ...original.slice(1)];

// console.log("Original :", original);
// console.log("Copy :", copy);



// Task 6
// Given an array of student objects, print each student’s name and marks.

// [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]

// let student = [
//   { name: "John", marks: 85 },
//   { name: "Alice", marks: 90 }
// ]
// for (const students of student) {
//      console.log(students.name + " scored " + students.marks);
// }


// Task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.

/* For change specific number or string use for loop method

arr[1] means the second sub-array (because indexing starts at 0), which is [3, 4].

arr[1][0] means the first element inside that second sub-array. So:

arr[1] → [3, 4]

arr[1][0] → 3

When you do arr[1][0] = 99; you’re replacing the 3 with 99.

*/

// let arr = [
//   [1, 2], [3, 4], [5, 6]
// ];

// for (let i = 0; i < arr.length; i++) {   
//      arr[1][0] = 99;
// }
// console.log(arr);