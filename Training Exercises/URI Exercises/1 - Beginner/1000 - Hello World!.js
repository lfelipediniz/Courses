//ESTE PROGRAMA EXIBIRÁ "HELLO WORLD" NO CONSOLE.

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

console.log("Hello World!");