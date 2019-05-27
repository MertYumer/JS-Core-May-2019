function stopwatch() {
    function start() {
        seconds = 0;
        minutes = 0;
        divElement.textContent = '00:00';
        startButton.disabled = true;
        stopButton.disabled = false;

        counter = setInterval(() => {
            seconds++;

            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }

            let time = minutes < 10 ? `0${minutes}:` : `${minutes}:`;
            time += seconds < 10 ? `0${seconds}` : `${seconds}`;
            divElement.textContent = time;
        }, 1000);
    }

    function stop() {
        clearInterval(counter);
        startButton.disabled = false;
        stopButton.disabled = true;
    }

    let seconds = 0;
    let minutes = 0;
    let counter;
    let divElement = document.getElementById('time');
    let startButton = document.getElementById('startBtn');
    startButton.addEventListener('click', start);

    let stopButton = document.getElementById('stopBtn');
    stopButton.addEventListener('click', stop);
}