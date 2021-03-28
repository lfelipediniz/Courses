function showHour() {

    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {

        hour12: false
    });
}

// configure a time interval for the execution of a function
const timer = setInterval(function() { 

    console.log(showHour());

}, 1000);

// determines the amount of time the function will last
setTimeout(function() {

    clearInterval(timer);
}, 10000)

