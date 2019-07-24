function attackEvents() {
    const loadButton = document.getElementById('btnLoadTowns');
    loadButton.addEventListener('click', loadTowns);

    function loadTowns() {
        const towns = document
            .getElementById('towns')
            .value
            .split(', ');

        const template = document.getElementById('towns-template').innerHTML;
        const compiledTemplate = Handlebars.compile(template);
        const context = {
            towns
        };

        const root = document.getElementById('root');
        root.innerHTML = compiledTemplate(context);
    }
}

attackEvents();