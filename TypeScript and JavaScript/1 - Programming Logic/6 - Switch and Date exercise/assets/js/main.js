function getDayWeekText(dayWeek) {

    let dayWeekText;

    switch (dayWeek) {

        case 0:
            dayWeekText = 'Sunday';
            return dayWeekText;

        case 1:
            dayWeekText = 'Monday';
            return dayWeekText;

        case 2:
            dayWeekText = 'Tuesday';
            return dayWeekText;

        case 3:
            dayWeekText = 'Wednesday';
            return dayWeekText;

        case 4:
            dayWeekText = 'Thursday';
            return dayWeekText;

        case 5:
            dayWeekText = 'Friday';
            return dayWeekText;

        case 6:
            dayWeekText = 'Saturday';
            return dayWeekText;
    }
}

function getMonthText(month) {

    let monthText;

    switch (month) {

        case 0:
            monthText = 'January';
            return monthText;

        case 1:
            monthText = 'February';
            return monthText;

        case 2:
            monthText = 'March';
            return monthText;

        case 3:
            monthText = 'April';
            return monthText;

        case 4:
            monthText = 'May';
            return monthTextt;

        case 5:
            monthText = 'June';
            return monthText;

        case 6:
            monthText = 'July';
            return monthText;

        case 7:
            monthText = 'August';
            return monthText;

        case 8:
            monthText = 'September';
            return monthText;

        case 9:
            monthText = 'October';
            return monthText;

        case 10:
            monthText = 'November ';
            return monthText;

        case 11:
            monthText = 'December';
            return monthText;
    }
}

function applyingZero (num) {

    return num >= 10 ? num : `0${num}`;
}

function formatDate(date) {

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    
    const hour = applyingZero(date.getHours());
    const min =  applyingZero(date.getMinutes());

    const monthText = getMonthText(month);

    return `${monthText} ${day}, ${year} at ${hour}:${min}`

}

function finalProcessDate(){

    const date = new Date();
    const yourDate = formatDate(date);

    let dayWeek = date.getDay();

    const dayWeekText = getDayWeekText(dayWeek);

    let finalDate =  `${dayWeekText}, ${yourDate}`;

    const result = document.querySelector('#result');

    return result.innerHTML = `${finalDate}`;
}

console.log(finalProcessDate());

