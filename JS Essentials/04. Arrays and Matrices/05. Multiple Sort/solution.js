function solve() {
    let firstInputArray = JSON.parse(document.getElementById('arr').value);
    let secondInputArray = JSON.parse(document.getElementById('arr').value);
    let resultElement = document.getElementById('result');

    let firstArray = firstInputArray.sort((a, b) => a-b);
    let secondArray = secondInputArray.sort();

    let firstDiv = document.createElement('div');
    let secondDiv = document.createElement('div');

    firstDiv.textContent = firstArray.join(', ');
    secondDiv.textContent = secondArray.join(', ');

    resultElement.appendChild(firstDiv);
    resultElement.appendChild(secondDiv);
}