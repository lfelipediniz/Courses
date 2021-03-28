let number1 = 9.565;

let  number2 = Math.floor(number1); 

    console.log(`Rounding the ${number1} down the result is ${number2}`);

    console.log(`Rounding the number ${number1} upwards the result is ` + Math.ceil(number1));

    console.log(`Rounding the number ${number1} to the nearest the result is ` + Math.round(number1));


const numbers = [23, 0.64, 65, 645, 94, 454, 231]

    console.log(`The highest number in the sequence ${numbers} is ` + Math.max(...numbers));

const randomNumber = Math.random() * (10 - 5) + 5;

    console.log(`Random lucky number between 10 and 5 for you: ` + Math.round(randomNumber));

    console.log(`Square root of ${randomNumber} is ` + randomNumber ** 0.5)