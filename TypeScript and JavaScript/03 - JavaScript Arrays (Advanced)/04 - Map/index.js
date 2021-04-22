const numbers = [3, 4, 56, 34, 894, 32, 45, 43];

// map always have the same size as the original array

const doubleNumbers = numbers.map((value) => {
  return value * 2;
});

console.log(doubleNumbers);

const people = [
  { name: "Luiz", age: 16 },
  { name: "Maria", age: 23 },
  { name: "Jane", age: 50 },
  { name: "Alfredo", age: 77 },
  { name: "Fran", age: 32 },
  { name: "Alfred", age: 17 },
];

const namePeople = people.map((obj) => {
  return obj.name;
});
const addID = people.map((obj, index) => {
  obj.id = Math.random(index).toFixed(2);
  return obj;
});

// in case I don't want the original object to be changed

const addID2 = people.map((obj, index) => {
  const newObj = { ...obj };
  newObj.id = Math.random(index).toFixed(2);
  return obj;
});

console.log(addID);
