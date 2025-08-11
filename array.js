// 18_2: Traverse Array using for, while, and for-of loop in JavaScript

const fruits = ['Daav', 'watermelon', 'melon', 'Anar', 'Apple']

for (let i = 0; i < fruits.length; i++) {
     console.log(i);
     console.log(fruits[i]);
      
}

const numbers = [45, 56, 7686, 45, 23, 345, 576];
for (let i = 0; i < numbers.length; i++) {
     console.log(i);
     console.log(numbers[i]);
      
}

let k = 0;
while (k <fruits.length) {
      console.log(fruits[k]);
      k++;
      
}

let e = 0;
while (e <fruits.length) {
      console.log(numbers[e]);
      e++;
      
}