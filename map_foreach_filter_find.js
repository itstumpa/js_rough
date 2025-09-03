const students = [
      {id:1, name: "abul", marks: 50},
      {id:2, name: "kabul", marks: 80},
      {id:3, name: "mabul", marks: 90},
      {id:4, name: "cabul", marks: 10},
]

const names = students.map(student => student.marks * 0.75)
const goodStudents = students.filter (student => student.marks > 80)
const goodStudent = students.find (student => student.marks > 80)



console.log(goodStudent)




const prop = "name";
const user = { name: "Isha", country: "BD" };
console.log(user[prop]);
