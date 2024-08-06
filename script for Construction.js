window.onload = function () {
    let duration = 5 * 24 * 60 * 60; // Set the timer for 5 days in seconds
    let display = document.querySelector('#timer');

    function startTimer(duration, display) {
        let timer = duration, hours, minutes, seconds;
        setInterval(function () {
            hours = Math.floor(timer / (60 * 60));
            minutes = Math.floor((timer % (60 * 60)) / 60);
            seconds = Math.floor(timer % 60);

            hours = hours < 10 ? '0' + hours : hours;
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            display.textContent = hours + ':' + minutes + ':' + seconds;

            if (--timer < 0) {
                timer = 0;
                display.textContent = '00:00:00';
            }
        }, 1000);
    }

    startTimer(duration, display);
};
