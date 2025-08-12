// Task -1:
// Find the lowest number in the array below.
// const heights2 = [167, 190, 120, 165, 137];

// const heights2 = [167, 190, 120, 165, 137];

// let min = Math.min(...heights2);

// console.log("lowest number:", min);

/* Different way with using for loop */

// const heights2 = [167, 190, 120, 165, 137];

// let min = heights2[0]; // assume first is smallest
// for (let i = 1; i < heights2.length; i++) {
//   if (heights2[i] < min) {
//     min = heights2[i];
//   }
// }

// console.log("Lowest number:", min);


// Task -2:
// Find the friend with the smallest name.
// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];

// let min = heights2[0]; 
// for (let i = 1; i < heights2.length; i++) {
//   if (heights2[i].length < min.length) {
//     min = heights2[i];
//   }
// }

// console.log("smallest name:", min);

// Task-3:
// Your task is to calculate the total budget required to buy electronics:

//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.

// let totalBudget = {
//       laptop : 35000,
//     tablet: 15000,
//     mobile: 20000
// }
// function calculateElectronicsBudget(budgetObj) {
//       return budgetObj.laptop + budgetObj.tablet + budgetObj.mobile
// }

// console.log("TotalBudget: ", calculateElectronicsBudget(totalBudget), "tk")

/* Different way with using forof loop
If you really want to keep "tk" in the data but still calculate, you’d have to extract the numbers:

*/

// let totalBudget = {
//   laptop: '35000 tk',
//   tablet: '15000 tk',
//   mobile: '20000 tk',
// };

// function calculateElectronicsBudget(budgetObj) {
//   let total = 0;
//   for (let key in budgetObj) {
//     total += parseInt(budgetObj[key]); // takes number part from '35000 tk'
//   }
//   return total;
// }

// console.log("Total budget:", calculateElectronicsBudget(totalBudget), "tk");


// Task-4:
// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// Input


//     const phones = [
//         { model: "PhoneA", brand: "Iphone", price: 95000 },
//         { model: "PhoneB", brand: "Samsung", price: 40000 },
//         { model: "PhoneC", brand: "Oppo", price: 26000 },
//         { model: "PhoneD", brand: "Nokia", price: 35000 },
//         { model: "PhoneE", brand: "Iphone", price: 105000 },
//         { model: "PhoneF", brand: "HTC", price: 48000 },
//     ];


    const phones = [
        { model: "PhoneA", brand: "Iphone", price: 95000 },
        { model: "PhoneB", brand: "Samsung", price: 40000 },
        { model: "PhoneC", brand: "Oppo", price: 26000 },
        { model: "PhoneD", brand: "Nokia", price: 35000 },
        { model: "PhoneE", brand: "Iphone", price: 105000 },
        { model: "PhoneF", brand: "HTC", price: 48000 },
    ];

//     function findAveragePhonePrice(phones){
//           let totalPrice = 0;

//           for (const phone of phones) {
//  totalPrice += phone.price;
//       }
//       return totalPrice / phones.length;
//     }

// console.log("Average Price:", findAveragePhonePrice(phones).toFixed(2));

// Method 2 – Using .reduce()

// function findAveragePhonePrice(phones) {
//   let totalPrice = phones.reduce((sum, phone) => sum + phone.price, 0);
//   return totalPrice / phones.length;
// }
// for (const element of object) {
      
// }




