function solve(steps, footPrint, speed) {
    let distance = steps * footPrint / 1000;
    let speedPerSecond = speed / 3600;

    let seconds = Math.round(distance / speedPerSecond);
    let minutes = Math.floor(steps * footPrint / 500);
    let hours = 0;

    while (seconds >= 60) {
        seconds -= 60;
        minutes++;
    }

    while (minutes >= 60) {
        minutes -= 60;
        hours++;
    }

    hours = (hours < 10 ? '0' : '') + hours;
    minutes = (minutes < 10 ? '0' : '') + minutes;
    seconds = (seconds < 10 ? '0' : '') + seconds;
    console.log(`${hours}:${minutes}:${seconds}`);
}
