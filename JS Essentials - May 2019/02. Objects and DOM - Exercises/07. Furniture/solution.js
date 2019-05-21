function solve() {
    function objectGenerator(object) {
        let trElement = document.createElement('tr');
        let imgElementTd = document.createElement('td');
        imgElementTd.innerHTML = `<img src="${object.img}">`;

        document
            .getElementsByTagName('tbody')[0]
            .appendChild(trElement);

        trElement.appendChild(imgElementTd);

        let nameElementTd = document.createElement('td');
        let nameElementP = document.createElement('p');

        nameElementP.textContent = object.name;
        nameElementTd.appendChild(nameElementP);
        trElement.appendChild(nameElementTd);

        let priceElementTd = document.createElement('td');
        let priceElementP = document.createElement('p');

        priceElementP.textContent = object.price;
        priceElementTd.appendChild(priceElementP);
        trElement.appendChild(priceElementTd);

        let decFactorElementTd = document.createElement('td');
        let decFactorElementP = document.createElement('p');

        decFactorElementP.textContent = object.decFactor;
        decFactorElementTd.appendChild(decFactorElementP);
        trElement.appendChild(decFactorElementTd);

        let checkboxTd = document.createElement('td');
        checkboxTd.innerHTML = '<input type="checkbox">';
        trElement.appendChild(checkboxTd);
    }

    function generate() {
        let objects = JSON.parse(document.getElementsByTagName('textarea')[0].value);
        objects.forEach(function (object) { objectGenerator(object) });
    }

    function buy() {
        let boughtFurniture = [];
        let totalPrice = 0;
        let avgDecFactor = 0;
        let count = 0;

        let allTrElements = Array.from(document.getElementsByTagName('tr'));

        for (let i = 1; i < allTrElements.length; i++) {
            if (allTrElements[i].children[4].children[0].checked) {
                count += 1;
                boughtFurniture.push(allTrElements[i].children[1].textContent.trim());
                totalPrice += +allTrElements[i].children[2].textContent;
                avgDecFactor += +allTrElements[i].children[3].textContent;
            }
        }

        avgDecFactor /=  count;

        document
            .getElementsByTagName('textarea')[1]
            .value =
            `Bought furniture: ${boughtFurniture.join(', ')}\n` +
            `Total price: ${totalPrice.toFixed(2)}\n` +
            `Average decoration factor: ${avgDecFactor}`;
    }

    let firstCheckboxTd = document.getElementsByTagName('td')[4];
    firstCheckboxTd.innerHTML = '<input type="checkbox">';

    let generateButton = document.getElementsByTagName('button')[0];
    generateButton.addEventListener('click', generate);

    let buyButton = document.getElementsByTagName('button')[1];
    buyButton.addEventListener('click', buy);
}