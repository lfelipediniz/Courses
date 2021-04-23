const person = {
  name: "Luiz",
  surname: "Costa",
};
const key = "name";
console.log(person[key]);
console.log(person["surname"]); // very useful for dynamic values

const person1 = new Object(); // constructor
person1.name = "Alfred";
person1.surname = "Taskcobit";

const person2 = {
  // literal
  name: "Antonio",
  surname: "Rodigues",
};

delete person1.name;

console.log(person1, person2);

for (let key in person) {
  console.log(person[key]);
}

function Person(name, surname) {
  this.name = name;
  this.surname = surname;
}

const p1 = new Person("Fabio", "Junho");

Object.freeze(p1); // locking the value of p1, works with arrays too

p1.name = ("aaaaaa");

console.log(p1);
