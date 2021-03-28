
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numbers){

    if (i === 2) continue; // skipping number 2

    console.log(i);

    if (i === 7 ) break; // Leaving the loop, after finding the 7
}


