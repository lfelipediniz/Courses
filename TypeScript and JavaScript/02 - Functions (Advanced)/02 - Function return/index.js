function multiplierCreator(multiplier) {

    return function (number) { return number * multiplier;}
};

const duplicates = multiplierCreator(2);
const triples = multiplierCreator(3);
const quadruplicate = multiplierCreator(4);

console.log(duplicates(3), triples(6), quadruplicate(20));
