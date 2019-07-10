function solve() {
    return {
        depart,
        arrive
    };
}

const currentStop = {
    name: 'depot',
    next: 'depot'
};

function depart() {
    request('GET', getURL(currentStop.next), true);
    changeButtonsDisabledProperty();
}

function arrive() {
    const stopInfo = document.getElementsByClassName('info')[0];
    stopInfo.textContent = `Arriving at ${currentStop.name}`;
    changeButtonsDisabledProperty();
}

function request(method, url, async) {
    const request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            onDepartSuccess(JSON.parse(this.response));

        } else if (this.readyState == 4 && this.status !== 200) {
            onDepartError();
        }
    };

    request.open(method, url, async);
    request.send();
}

function getURL(currentId) {
    const url = `https://judgetests.firebaseio.com/schedule/${currentId}.json`;
    return url;
}

function onDepartSuccess(data) {
    if (!data) {
        onDepartError();

    } else {
        currentStop.name = data.name;
        currentStop.next = data.next;

        const stopInfo = document.getElementsByClassName('info')[0];
        stopInfo.textContent = `Next stop ${currentStop.name}`;
    }
}

function onDepartError() {
    const stopInfo = document.getElementsByClassName('info')[0];
    stopInfo.textContent = `Next stop ${currentStop.name}`;
    disableButtons();
}

function changeButtonsDisabledProperty() {
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    if (departButton.disabled === true) {
        departButton.disabled = false;
        arriveButton.disabled = true;
    } else {
        departButton.disabled = true;
        arriveButton.disabled = false;
    }
}

function disableButtons() {
    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');

    departButton.disabled = true;
    arriveButton.disabled = true;
}

const result = solve();