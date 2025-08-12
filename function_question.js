// Task-1
// Take four parameters. Multiply the four numbers and then return the resultz

// function multiply (a, b, c, d){

//        return  a * b * c * d;     
// }
// console.log(multiply(3, 2, 4, 5));

// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

// let number = [3];

// for (let i = 0; i < number.length; i++) {
//       if (number[i] % 2 === 0) {
//             console.log(number[i] / 2);
//       } else {
//             console.log(number[i] * 2)
//       }

// }

// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.


// let numbers = [10, 20, 300, 40, 50, 20, 3, 15, 7, 2005];


// function make_avg(arr, size) {
//       let sum = 0;
//       for (let i = 0; i < size; i++) {
//             sum += arr[i];        
//       }
//       return sum / size;
// }
// console.log(make_avg(numbers, numbers.length));


// Task-4
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

// function count_zero(binary){
//       let count = 0;
//  for (const numbers of binary) {
//       if (numbers === '0') {
//             count++;
//       }
//  }
//  return count;
// }

// console.log(count_zero("10100000010")); 

// Task-5
// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd

let numbers = [101];
function odd_even(){
      for (let i = 0; i < numbers.length; i++) {
           if (numbers[i] % 2 === 0) {
             console.log("even")
           } else {
            console.log("odd")
           }
            
      }
}
odd_even();