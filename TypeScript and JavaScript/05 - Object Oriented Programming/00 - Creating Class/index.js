class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  speak() {
    console.log(`${this.name} is speaking`);
  }

  eat() {
    console.log(`${this.name} is eating`);
  }

  drink() {
    console.log(`${this.name} is drinking`);
  }
}

// When using Classes, methods are automatically linked in prototype

const p1 = new Person("Luiz", "Costa");
