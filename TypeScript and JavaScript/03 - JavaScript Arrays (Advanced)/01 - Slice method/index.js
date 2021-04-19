/*               -6       -5       -4      -3      -2       -1
                  0        1        2       3       4        5     */
const names = ['Maria', 'Edson', 'Duda', 'Gaby', 'Emily', 'Jorge']

// names.splice(index, delete, element 1, element 2, element 3 );

const deleted = names.splice(-1, 1); // delete things
const add = names.splice(3, 0, 'Alek'); // add things
const bivolt = names.splice(2, 1, 'Alek'); // add and remove things


console.log(names, deleted, bivolt);