const numbers = [1, 2, 3, 4, 5];

const reverse = [];
for (let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
      // reverse.push(numbers[i]);
      // reverse.unshift(numbers[i]);
      reverse.shift(numbers[i]);

}
console.log(reverse);