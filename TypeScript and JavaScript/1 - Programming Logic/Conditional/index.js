const hour = 12;

if(hour <= 11){

    console.log('Good Morning!');
}

else if(hour >= 12 && hour <= 17){

    console.log('Good Afternoon!');
}

else if (hour >= 18 && hour <= 23){

    console.log('Good Night!');
}

else console.log('You put an invalid hour!');

