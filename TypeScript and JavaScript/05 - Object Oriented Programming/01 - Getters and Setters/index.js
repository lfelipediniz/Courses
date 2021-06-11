const _velocity = Symbol("velocity");
class Car {
  constructor(name) {
    this.name = name;
    this[_velocity] = 0;
  }

  set velocity(value) {
    if (typeof value !== "number") return;
    if (value >= 100 || value <= 0) return;
    this[_velocity] = value;
  }

  get velocity() {
    return this[_velocity];
  }

  speedUp() {
    if (this[_velocity] >= 100) return;
    this[_velocity]++;
  }

  brake() {
    if (this[_velocity] <= 0) return;
    this[_velocity]--;
  }
}

const c1 = new Car("Fusca");

for (let i = 0; i <= 200; i++) {
  c1.speedUp();
}

c1.velocity = 2000; /*/ To avoid cases like this, we use the Gettier 
and Setter, as well as the Symbol (private)/*/

console.log(c1.velocity);
