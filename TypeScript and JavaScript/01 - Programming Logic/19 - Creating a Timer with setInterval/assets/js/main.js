function clock() {

    function getTimeFromSeconds(second) {

        const date = new Date(second * 1000);

        return date.toLocaleTimeString('pt-BR', {

            hour12: false,
            timeZone: 'UTC'
        });
    }

    const clock = document.querySelector('.timer');

    let seconds = 0;
    let timer;

    // start clock

    function timerStarter() {

        timer = setInterval(function () {

            seconds++;

            clock.innerHTML = getTimeFromSeconds(seconds);

        }, 1000)
    };

    // capture browser events

    document.addEventListener('click', function (e) {

        const element = e.target;

        if (element.classList.contains('start')) {

            clock.classList.remove('paused');

            clearInterval(timer);
            timerStarter();
        }

        if (element.classList.contains('pause')) {

            clearInterval(timer);
            clock.classList.add('paused'); // Add a css property, for the timer to change color
        }

        if (element.classList.contains('reset')) {

            clearInterval(timer);
            clock.innerHTML = '00:00:00';
            seconds = 0;
            clock.classList.remove('paused');
        }
    });
}

clock();
