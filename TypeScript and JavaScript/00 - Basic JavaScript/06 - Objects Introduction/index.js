// simple object creation
const person1 = {

    name: 'Luiz Felipe',
    surname: 'Diniz Costa',
    age: 16
};

console.log(person1.name)

// using function to return the object, in other words, an object factory

const registerPeople = (name, surname, age) => {
    return {
        name, // = name: name, 
        surname, // = surname: surname,
        age, // =  age: age,
    };
}

const persson1 = registerPeople('Luiz' , 'Costa', 16 );
console.log(persson1.name);

// Making methods

const user = {

    name: 'Pedro',
    surname: 'Alfredo',
    age: 85,

    speak() {
        console.log(`${this.name} ${this.surname} is saying hi!`)
    }
}

user.speak();