function solve() {
    let inputElement = document.getElementById('arr').value;
    let resultElement = document.getElementById('result');

    let array = JSON.parse(inputElement);
    let result = array.map(x => x * array.length);

    for (let i = 0; i < result.length; i++) {
        let p = document.createElement('p');
        p.textContent = `${i} -> ${result[i]}`;
        resultElement.appendChild(p);
    }
}