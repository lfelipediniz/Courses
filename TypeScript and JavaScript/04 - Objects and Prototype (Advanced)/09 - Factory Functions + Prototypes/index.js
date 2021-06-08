const speak = {
  speak() {
    console.log(`${this.name} is talking.`);
  },
};

const eat = {
  eat() {
    console.log(`${this.name} is eating.`);
  },
};

const drink = {
  drink() {
    console.log(`${this.name} is drinking.`);
  },
};

const prototypePerson = Object.assign({}, speak, eat, drink);

function createPerson(name, surname) {
  return Object.create(prototypePerson, {
    name: { value: name },
    surname: { value: surname },
  });
}

const p1 = createPerson("Luiz", "Otávio");
const p2 = createPerson("Maria", "Antonieta");
console.log(p1, p2);
