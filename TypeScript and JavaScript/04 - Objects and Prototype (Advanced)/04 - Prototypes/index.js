function Person(name, surname) {
  this.name = name;
  this.surname = surname;
  this.fullName = () => this.name + " " + this.surname;
}

Person.prototype.fullName = function () {
  return this.name + " " + this.surname;
};
//instance
const person1 = new Person("Luiz", "Costa");
const date = new Date();
const person2 = new Person("Isabela", "Turner");

console.dir(person1);
console.dir(date);
