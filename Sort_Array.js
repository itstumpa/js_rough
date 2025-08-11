// 18_4: Sort Array in Ascending & Descending Order (Manual & sort() method)

const numbers = [4, 2, 9, 5, 3, 8]
numbers.sort();
console.log(numbers);


const friends = ['akib', 'bakib', 'tumpa', 'rumpa', 'sumpa']
friends.sort();
console.log(friends);


const ages = [4, 200, 9, 5, 31, 8]
ages.sort();
console.log(ages);

// ascending
const correct_ages  = ages.sort(function (a, b) {
      return a - b
})
console.log(correct_ages)

// descending
const correct_ages_desc  = ages.sort(function (a, b) {
      return b - a
})
console.log(correct_ages_desc)





