function solve() {
    let searchedValue = parseInt(document.getElementById('num').value);
    let textValue = document.getElementById('arr').value;
    let resultElement = document.getElementById('result');

    let stringArray = JSON.parse(textValue);
    let result = [];

    for (let element of stringArray) {
        let elementExists = element.includes(searchedValue);
        let index = element.indexOf(searchedValue);
        result.push(elementExists + ' -> ' + index);
    }

    resultElement.textContent = result.join(',');
}