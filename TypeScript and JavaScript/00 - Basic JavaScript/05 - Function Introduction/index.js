//everything that is in the scope of the function, is protected

// Classical Function

    function sum(x, y) {

        result = x + y;

        return result;
    }

console.log(sum(2, 4));

// Anonymous Function

    const root = function (n) {

        return n ** 0.5;
    };

console.log(root(9))

// Arrow Function

    const multiplication = (a, b) => {

        return a * b;
    };

console.log(multiplication(5, 10))

// Arrow function with only one line in the function, and only one parameter

const squared = j => j * j;

console.log(squared(10))