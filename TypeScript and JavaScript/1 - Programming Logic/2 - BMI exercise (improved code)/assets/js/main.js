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
});

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