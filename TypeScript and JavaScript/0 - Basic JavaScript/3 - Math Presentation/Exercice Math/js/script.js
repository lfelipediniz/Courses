
const userNumber = Number(prompt('Type a number:'));

const titleNumber = document.getElementById("title-number");
const text = document.getElementById("text");

    titleNumber.innerHTML = userNumber;

    text.innerHTML += `<p>${userNumber} + 2 = ${userNumber + 2}</p>`;

    text.innerHTML += `<p>The square root of ${userNumber} is ${userNumber ** 0.5}</p>`;

    text.innerHTML += `${userNumber} isn't an integer value: ${isNaN(userNumber)}</p>`;

    text.innerHTML += `${userNumber} rounding down is ${Math.ceil(userNumber)}</p>`;

    text.innerHTML += `${userNumber} rounding up is ${Math.floor(userNumber)}</p>`;
    
    text.innerHTML += `${userNumber} with 2 decimal places: ${userNumber.toFixed(2)}</p>`;
    