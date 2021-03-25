
function getTimeFromSeconds(second) {

    const date = new Date(second * 1000);

    return date.toLocaleTimeString('pt-BR', {

        hour12: false,
        timeZone: 'UTC'
    });
}

console.log(getTimeFromSeconds(10));

const clock = document.querySelector('.timer');
const start = document.querySelector('.start')
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');

let seconds = 0;

// start clock

function timerStarter() {

    const timer = setInterval(function () {

        seconds++;

        clock.innerHTML = getTimeFromSeconds(seconds);

    }, 1000)
};

start.addEventListener('click', function (event) {

    timerStarter();
});

pause.addEventListener('click', function (event) {

});

reset.addEventListener('click', function (event) {

});
