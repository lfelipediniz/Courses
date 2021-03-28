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

const date = new Date('2000-03-26 00:00:00');
let dayWeek = date.getDay();

const dayWeekText = getDayWeekText(dayWeek);

console.log(dayWeek, dayWeekText);