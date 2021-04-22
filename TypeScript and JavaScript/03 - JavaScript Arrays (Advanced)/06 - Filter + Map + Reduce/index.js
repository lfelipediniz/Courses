const numbers = [3, 4, 56, 34, 894, 32, 45, 43];

const pairNumbers = numbers
.filter(value => value % 2 === 0)
.map(value => value * 2)
.reduce((ac, value) => ac + value)

// the sum of double all pairs

console.log(pairNumbers);