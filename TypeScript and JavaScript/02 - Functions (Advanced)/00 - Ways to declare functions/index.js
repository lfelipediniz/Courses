// function statement (Function hoisting)
greetings();

function greetings() {

    console.log(`Hello Word!
    `);
}

// first-class objects & function expression
const data = function(){
    
    console.log('I am a data!');
};

function runFunction(theFunction) {

    console.log('I will run the function:');
    theFunction();  
}

runFunction(data);

// arrow function
const arrowFunction = () => {

    console.log("I'm an arrow function");
}

arrowFunction();

// inside the object
const obj = {

    speak() {

        console.log("I'm speaking...");
    }
}

obj.speak();