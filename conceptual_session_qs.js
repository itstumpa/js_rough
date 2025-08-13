// Task 1 :
// Create a Function sum which take 2 value and return the sum of 2 number
// Create a Function multiply which take 2 value and return the multiply of 2 number
// Suppose you have 2 numbers a , b print the sum of ( a + b) and ( a x b ) using sum and
// multiply function.

// function sum(input1, input2) {
//       let result = input1 + input2;
//       // console.log(result);
//       return result;
// }
// sum(2, 3);

// function multiply(input1, input2) {
//      let result = input1 * input2;
//       //  console.log(multiply);
//       return result;
// }
// multiply(2, 6);

// let a = 2;
// let b = 3;

// let result = sum(a, b) + multiply(a, b);
// console.log(result);

// Task 2:
// Create a function sumOfArray which takes an array and returns the sum of that array. If the
// input is not an array and if any data not a number found in the array , it will return ‘Invalid’ 

// function sumOfArray(arr){
//       let sum = 0;
//       if (Array.isArray(arr) == false) {
//             return "Invalid";
//       }
// for (let num of arr) {
// if(typeof num !== "number") {
//       return "Invalid"
// }     
//       sum = sum + num;
// }
// return sum;
// }
// let result = sumOfArray([1, 2, 3]);
// let result = sumOfArray([3, 7, 8]);
// let result = sumOfArray([3, 5, "eksho", 3]);
// let result = sumOfArray(10);
// console.log(result);




// Task 3: Develop a way to think about solving problems
// Create a function countVowels which take a string as input and returns the total number of
// vowels in that string
// If the input is not a string return "Invalid"


function countVowels(str) {
    if (typeof str !== "string") {
        return "Invalid"; // input is not a string
    }

    let count = 0;
    let vowels = "aeiouAEIOU";

    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

      

console.log(countVowels("data"));
console.log(countVowels("Jhankar miA"));   
console.log(countVowels("Dulal uddin")); 
console.log(countVowels(["Jhankar miA"]));  
console.log(countVowels(109));   
console.log(countVowels("108"));  




