function attachEvents() {
    const elements = {
        loadButton: document.querySelector('button.load'),
        addButton: document.querySelector('button.add'),
        /*updateButton: document.querySelector('button.update'),
        deleteButton: document.querySelector('button.delete')*/
    };

    elements.loadButton.addEventListener('click', loadAllCatches);
    elements.addButton.addEventListener('click', createCatch);

    /*elements.updateButton.addEventListener('click', updateCatch);
    elements.deleteButton.addEventListener('click', deleteCatch);*/

    function loadAllCatches() {
        fetch('https://fisher-game.firebaseio.com/catches.json', { method: 'GET' })
            .then(handler)
            .then(console.log);
    }

    function createCatch() {

    }

    /*function updateCatch() {

    }

    function deleteCatch() {

    }*/

    function handler(response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error ${response.statusText}`)
        }

        return response.json();
    }
}

attachEvents();

