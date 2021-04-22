const numbers = [3, 4, 56, 34, 894, 32, 45, 43];

const total = numbers.reduce((accumulator, value, index, array) => {
  accumulator += value;
  return accumulator;
}, 0); // initial value

console.log(total); // adding only the even numbers

const total2 = numbers.reduce((accumulator, value) => {
  if (value % 2 === 0) accumulator.push(value);

  return accumulator;
}, []);

console.log(total2);

const people = [
  { name: "Luiz", age: 16 },
  { name: "Maria", age: 23 },
  { name: "Jane", age: 50 },
  { name: "Alfredo", age: 77 },
  { name: "Fran", age: 32 },
  { name: "Alfred", age: 17 },
];

const older = people.reduce((accumulator, value) => {
  if (accumulator.age > value.age) return accumulator;
  return value;
  // if the accumulator is not greater than the value, the value is returned
});

console.log(older);
