// representing time in JS

const threeHour = 60 * 60 * 3 * 1000;
const oneDay = 60 * 60 * 24 * 1000;

const date = new Date(0 + threeHour); /* 01/01/1970 Timestamp unix */

const date1 = new Date(2020, 3, 20, 15, 14, 27); 

console.log(date.toString());
console.log(Date());
console.log(date1.toString());

// most used format

const date2 = new Date('2021-04-20 20:20:59.500');

console.log(date2.toString());

// Present time, considering the Timestamp

console.log(`
${Date.now()}`);

// creating function that format a date

function applyingZero (num) {

    return num >= 10 ? num : `0${num}`;
}

function formatDate(date5) {

    const day = applyingZero(date5.getDate());
    const month = applyingZero(date5.getMonth() + 1);
    const year = applyingZero(date5.getFullYear());
    
    const hour = applyingZero(date5.getHours());
    const min = applyingZero(date5.getMinutes());
    const sec = applyingZero(date5.getSeconds());

    return `${day}/${month}/${year} ${hour}:${min}:${sec}`

}

const date5 = new Date();
const yourDate = formatDate(date5);

console.log(`
${yourDate}`);




