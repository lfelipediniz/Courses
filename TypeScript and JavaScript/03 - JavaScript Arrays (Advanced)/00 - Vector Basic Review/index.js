//                 0          1         2          3          4          5
const names = ['Camilly', 'Eduardo', 'Felipe', 'Rodrigo', 'Gabriel', 'Andeson'];

names[2] = 'João'; // literal array
const names2 = new Array('Alek', 'Valdemir', "Maria", )// constructor array

const newNames = [...names]; // spread operator 

const sliceOfArray = names.slice(0, 3); 

const sliceOfArray2 = names.slice(0, -1); // removing the last

delete names[5]; // to delete the parameter of indice 2

/*/ const removed = names.pop(); => remove element from array
const removed = names.shift();  => in addition to removing, it displaces all indexes 
in the array /*/

names.push('Wallace'); // add elements at the end of the array
names.unshift('Azeitona'); // add elements at the beginning of the array

console.log(names, names2, newNames, sliceOfArray, sliceOfArray2);

const fullName = 'Rodnei Pereira da Silva';

const fullNameArray = fullName.split(' '); console.log(fullNameArray);

// convert array to string

const returnString = fullNameArray.join(' '); console.log(returnString);



