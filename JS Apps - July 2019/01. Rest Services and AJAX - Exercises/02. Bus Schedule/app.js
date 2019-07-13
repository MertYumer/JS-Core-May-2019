function solve() {
    const baseUrl = 'https://judgetests.firebaseio.com/schedule/';
    let currentStop = {
        name: 'depot',
        next: 'depot'
    };

    const departButton = document.getElementById('depart');
    const arriveButton = document.getElementById('arrive');
    const stopInfo = document.getElementsByClassName('info')[0];

    function depart() {
        let currentUrl = baseUrl + currentStop.next + '.json';

        fetch(currentUrl)
            .then(request => request.json())
            .then(data => changeStop(data));
    }

    function arrive() {
        stopInfo.textContent = `Arriving at ${currentStop.name}`;
        arriveButton.disabled = true;
        departButton.disabled = false;
    }

    function changeStop(data) {
        currentStop.name = data.name;
        currentStop.next = data.next;

        stopInfo.textContent = `Next stop ${currentStop.name}`;
        arriveButton.disabled = false;
        departButton.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

const result = solve();