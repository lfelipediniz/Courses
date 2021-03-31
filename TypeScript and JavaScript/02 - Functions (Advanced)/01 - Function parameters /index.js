/* in javascript the parameters of a function denoted with the word "function" are stored 
in a kind of variable named "arguments" */

function sum() {
    
    let total = 0;

    for (let argument of arguments) total += argument;

    console.log(total); 
}

sum(2, 3,33, 23 , 34 ,3432, 22);

function sum2 (a, b = 2) {

    // b = b || 2; =  old way of putting a steppe value in the variable

    console.log(a + b);
}

sum2(2, undefined);

// using rest operator

const account = function (operator, accumulator, ...numbers){

    for(let number of numbers) {
        
        if (operator === '+') accumulator += number;
        if (operator === '-') accumulator -= number;
        if (operator === '/') accumulator /= number;
        if (operator === '*') accumulator *= number;
    }

    console.log(accumulator);
};

account('+', 0, 23, 23, 4, 5, 435);