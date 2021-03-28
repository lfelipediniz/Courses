/*
Write a function that receives a number and returns:
  
number is divisible by 3 = Fizz
number is divisible by 5 = Buzz
number is divisible by 3 and 5 = FizzBuzz
number is not divisible by 3 and 5 = "returns the number itself"
check if the number is really a number
use the numbered function from 0 to 100 */

function fizzBuzz(number) {

    if (typeof number !== 'number') return number;
    if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';

    if (number % 3 === 0) return 'Fizz';
    if (number % 5 === 0) return 'Buzz';
    return number;
}

console.log('a', fizzBuzz('a'))

for (let i = 0; i <= 100; i++) {

    console.log(i, fizzBuzz(i));
}