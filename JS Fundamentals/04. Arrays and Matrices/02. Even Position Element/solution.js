function solve() {
    let inputElement = document.getElementById('arr').value;
    let resultElement = document.getElementById('result');

    let array = JSON.parse(inputElement);
    let result = array.filter(x => array.indexOf(x) % 2 === 0);

    resultElement.textContent = result.join(' x ');
}