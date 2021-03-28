
const students = ['Peter', 'Lorena', 'Luiz Felipe', 'Ana Julia'];

//delete students[1]; delete specific position

students.push('Thomas'); // this function allows you to add more data to the array
students.unshift('Percival'); // this function allows adding more data to the array, however in the first positions

const removed = students.pop(); //removes the last data from the array
students.shift(); //removes the first data from the array

console.log(students);
console.log(`Is array? ${students instanceof Array} `);