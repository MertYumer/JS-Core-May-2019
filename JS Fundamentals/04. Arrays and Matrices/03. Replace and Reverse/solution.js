function solve() {
    let inputElement = document.getElementById('arr').value;
    let resultElement = document.getElementById('result');

    let array = JSON.parse(inputElement);
    let result = array
        .map(x => x.split('').reverse().join(''))
        .map(x => x.charAt(0).toUpperCase() + x.slice(1));

    resultElement.textContent = result.join(' ');
}