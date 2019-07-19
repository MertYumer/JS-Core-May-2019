function attachEvents() {
    const elements = {
        loadButton: document.querySelector('button.load'),
        addButton: document.querySelector('button.add'),
        catches: document.getElementById('catches')
    };

    elements.catches.children[0].style.display = 'none';
    elements.loadButton.addEventListener('click', loadAllCatches);
    elements.addButton.addEventListener('click', createCatch);

    function handler(response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error ${response.statusText}`)
        }

        return response.json();
    }

    function loadAllCatches() {
        fetch('https://fisher-game.firebaseio.com/catches.json', {method: 'GET'})
            .then(handler)
            .then(showAllCatches);
    }

    function showAllCatches(data) {
        Object.keys(data).forEach(key => {
            const catchElement = elements.catches.children[0].cloneNode(true);
            catchElement.style.display = 'inline-block';

            catchElement.setAttribute('data-id', key);
            catchElement.querySelector('input.angler').value = data[key].angler;
            catchElement.querySelector('input.weight').value = data[key].weight;
            catchElement.querySelector('input.species').value = data[key].species;
            catchElement.querySelector('input.location').value = data[key].location;
            catchElement.querySelector('input.bait').value = data[key].bait;
            catchElement.querySelector('input.captureTime').value = data[key].captureTime;
            catchElement.querySelector('button.update').addEventListener('click', updateCatch);
            catchElement.querySelector('button.delete').addEventListener('click', deleteCatch);

            elements.catches.appendChild(catchElement);
        });

        function updateCatch(event) {
            const catchId = event.currentTarget.parentNode.getAttribute('data-id');
            const currentCatch = event.currentTarget.parentNode;

            const data = Array.from(currentCatch.children)
                .filter(e => e.tagName === 'INPUT')
                .reduce((acc, curr) => {
                    const prop = curr.className;
                    acc[prop] = curr.value;
                    return acc;
                }, {});

            const headers = {
                method: 'PUT',
                body: JSON.stringify(data)
            };

            fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, headers)
                .then(handler)
                .then(data => {
                    elements.loadButton.click();
                });
        }

        function deleteCatch(event) {
            const catchId = event.currentTarget.parentNode.getAttribute('data-id');
            const currentCatch = event.currentTarget.parentNode;

            const headers = {
                method: 'DELETE'
            };

            fetch(`https://fisher-game.firebaseio.com/catches/${catchId}.json`, headers)
                .then(handler)
                .then(data => {
                    currentCatch.remove();
                });
        }
    }

    function createCatch() {
        const currentCatch = document.querySelector('fieldset#addForm');

        const data = Array.from(currentCatch.children)
            .filter(e => e.tagName === 'INPUT')
            .reduce((acc, curr) => {
                const prop = curr.className;
                acc[prop] = curr.value;
                return acc;
            }, {});

        const headers = {
            method: 'POST',
            body: JSON.stringify(data)
        };

        fetch('https://fisher-game.firebaseio.com/catches.json', headers)
            .then(handler)
            .then(data => {
                elements.loadButton.click();
            });
    }
}

attachEvents();