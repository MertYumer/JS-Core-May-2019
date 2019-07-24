(() => {
    loadMonkeys();

    async function loadMonkeys() {
        const allMonkeysHtml = await fetch('allMonkeys.html')
            .then(function (response) {
                return response.text();
            });

        const monkeyHtml = await fetch('monkey.html')
            .then(function (response) {
                return response.text();
            });

        const allMonkeysTemplate = Handlebars.compile(allMonkeysHtml);
        const monkeyTemplate = Handlebars.compile(monkeyHtml);

        const context = {
            monkeys
        };

        Handlebars.registerPartial('monkey', monkeyTemplate);

        const allMonkeys = document.getElementsByClassName('monkeys')[0];
        allMonkeys.innerHTML = allMonkeysTemplate(context);
    }
})();

function showInfo(id) {
    const infoDiv = document.getElementById(id);

    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';

    } else {
        infoDiv.style.display = 'none';
    }
}