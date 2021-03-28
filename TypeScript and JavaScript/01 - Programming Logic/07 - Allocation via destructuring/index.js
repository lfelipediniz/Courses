// With arrays
const numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const [list1, list2, list3] = numbers;

console.log(list3[2]);

// With objects

const person = {

    name: 'Carlos',
    surname: 'Felino',
    age: 26,
    address: {

        street: 'Costas Street',
        homeNumber: 231
    }
};

const {name = 'Unnamed', surname} = person; /* You can place pre-defined
values, in case there are problems with your variable */

console.log(name, surname);

// If I didn't want to use the same name in the variables
const {name: test = 'Unnamed'} = person; 

console.log(test);

const {address: {street, homeNumber}} = person; 

console.log(street, homeNumber);

// Using rest
const {...rest} = person;

console.log(`
`,rest);






