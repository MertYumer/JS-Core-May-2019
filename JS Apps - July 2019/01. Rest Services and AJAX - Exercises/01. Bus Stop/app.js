function getInfo() {
    let stopId = document.getElementById('stopId').value;
    clearBusList();
    request('GET', getURL(stopId), true);
}

function clearBusList() {
    const busList = document.getElementById('buses');
    busList.innerHTML = '';
}

function request(method, url, async) {
    let request = new XMLHttpRequest();

    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            onGetBusInfoSuccess(JSON.parse(this.response));

        } else if (this.readyState == 4 && this.status !== 200) {
            onGetBusInfoError();
        }
    };

    request.open(method, url, async);
    request.send();
}

function getURL(stopId) {
    const url = `https://judgetests.firebaseio.com/businfo/${stopId}.json`;
    return url;
}

function onGetBusInfoSuccess(data) {
    const stopName = document.getElementById('stopName');
    stopName.textContent = data.name;
    const busList = document.getElementById('buses');

    for (const bus in data.buses) {
        if (data.buses.hasOwnProperty(bus)) {
            let busId = bus;
            let time = data.buses[bus];

            let currentBus = document.createElement('li');
            currentBus.textContent = `Bus ${busId} arrives in ${time} minutes`;

            busList.appendChild(currentBus);
        }
    }
}

function onGetBusInfoError() {
    const stopName = document.getElementById('stopName');
    stopName.textContent = 'Error';
}
