// Filter => always returns an array with the same number of elements or less

const numbers = [3, 4, 56, 34, 894, 32, 45, 43];

// 1) returns an array only with values greater than 10

const filteredNumbers = numbers.filter(value => value > 10);

console.log(filteredNumbers);

const filteredNumbers2 = numbers.filter((value, index, array) => { 

    // checking the value of the function parameters
    console.log(value, index, array); 
});

/* 2) return people who have a name with 5 letters or more
      return people over 50 years old
      return people whose name ends with 'a'
*/

const people = [

    { name: 'Luiz', age: 16 },
    { name: 'Maria', age: 23 },
    { name: 'Jane', age: 50 },
    { name: 'Alfredo', age: 77 },
    { name: 'Fran', age: 32 },
    { name: 'Alfred', age: 17 }
];

const largeNames = people.filter(value => value.name.length >= 5);
const oldPeoples = people.filter(value => value.age >= 50);
const endsA = people.filter(value => value.name.toLowerCase().endsWith('a'));

console.log(largeNames, oldPeoples, endsA);

