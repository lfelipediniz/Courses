// representing time in JS
const threeHour = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;

const date = new Date(0 + threeHour); /* 01/01/1970 Timestamp unix */

const date1 = new Date(2020, 3, 20, 15, 14, 27); 

console.log(date.toDateString());
console.log(Date());
console.log(date1.toDateString());




