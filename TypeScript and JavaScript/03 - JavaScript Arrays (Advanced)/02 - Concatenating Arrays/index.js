const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

const a3 = a1.concat(a2, [7, 8, 9], 'Luiz Felipe');

console.log(a3);

// or

const a4 = [...a1, 'Alek', ...a2, ...[1000, 10002]];

console.log(a4);