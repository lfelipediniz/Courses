const people = [
  { id: 3, name: "Luiz" },
  { id: 2, name: "Joana" },
  { id: 1, name: "Andreia" },
];

// That way, JS always puts it in ascending order, this can become a problem
/* const newPeople = {};
for (const person of people) {
  const { id } = person;
  newPeople[id] = { ...person };
} */

const newPeople = new Map();
for (const person of people) {
  const { id } = person;
  newPeople.set(id, { ...person });
}

console.log(newPeople);
