function getInfo() {
    const stopId = document.getElementById('stopId');
    const stopName = document.getElementById('stopName');
    const busesList = document.getElementById('buses');
    busesList.innerHTML = '';
    const url = `https://judgetests.firebaseio.com/businfo/${stopId.value}.json`;

    request('GET', url, true);

    function request(method, url, async) {
        const request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200){
                const data = JSON.parse(this.response);
                const {name, buses} = data;
                stopName.textContent = name;

                for (const bus in buses) {
                    const busId = bus;
                    const time = buses[bus];

                    const currentBus = document.createElement('li');
                    currentBus.textContent = `Bus ${busId} arrives in ${time} minutes`;
                    busesList.appendChild(currentBus);
                }

            } else if (this.readyState == 4 && this.status !== 200){
                stopName.textContent = 'Error';
            }
        };

        request.open(method, url, async);
        request.send();
        stopId.value = '';
    }
}


