// capture the form event
const form = document.querySelector('#bmi-form');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const inputWeight = e.target.querySelector('#weight');
    const inputHeight = e.target.querySelector('#height');

    const weight = Number(inputWeight.value);
    const height = Number(inputHeight.value);

    if (!weight || !height) { setResult('We detected an invalid value!', false); return; }

    const bMI = getBMI(weight, height);

    const BMILevel = getBMILevel(bMI);

    console.log(bMI, BMILevel);
});

// Calculating BMI
function getBMI (weight, height) {

    const bMI = weight / height ** 2;
    return bMI.toFixed(2);
}

// BMI Classified
function getBMILevel(bMI) {

    const level = [
        
        'Under weight',
        'Normal weight',
        'Overweight',
        'Obesity grade one',
        'Obesity grade two',
        'Obesity grade three'
    ];

    if (bMI >= 39.9) return level[5];
    if (bMI >= 34.9) return level[4];
    if (bMI >= 29.9) return level[3];
    if (bMI >= 24.9) return level[2];
    if (bMI >= 18.5) return level[1];
    if (bMI <  18.5) return level[0];
}

// function with the specialty of creating parameters
function createP () {

    const p = document.createElement('p');
    return p;
}


function setResult (msg, isValid){

    const result = document.querySelector('#result');

    result.innerHTML = '';

    const p = createP();

    p.innerHTML = msg;

    result.appendChild(p);
}