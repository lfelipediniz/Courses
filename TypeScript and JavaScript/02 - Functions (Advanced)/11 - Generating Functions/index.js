function* generating1() {
  // code...
  yield "Value 1"; /*/ although it looks like the "return", I can use it several
    times during the function code /*/

  // code...
  yield "Value 2";

  // code...
  yield "Value 3";
}

function* generating2() {
  let i = 0;

  while (true) {
    yield i;
    i++;
  }
}

const g1 = generating1();

for(let value of g1) console.log(value);

const g2 = generating2();

console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
