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

const arr1 = [1, 2, 3];
for (let i = 0; i < arr1.length; i++) {
     console.log(arr1)
      
}