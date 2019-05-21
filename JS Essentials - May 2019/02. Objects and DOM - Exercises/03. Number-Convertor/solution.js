function solve() {
    function clickEvent() {
        let selectMenuToElementValue = document.getElementById('selectMenuTo').value;
        let decimalElementValue = document.getElementById('input').value;
        let resultElement = document.getElementById('result');

        if (selectMenuToElementValue === 'binary') {
            resultElement.value = (+decimalElementValue).toString(2);
        }
        else if (selectMenuToElementValue === 'hexadecimal') {
            resultElement.value = (+decimalElementValue).toString(16).toUpperCase();
        }
    }

    let selectMenuToElement = document.querySelector('#selectMenuTo');
    let binaryOptionElement = document.createElement('option');
    let hexadecimalOptionElement = document.createElement('option');
    binaryOptionElement.value = 'binary';
    binaryOptionElement.text = 'Binary';
    hexadecimalOptionElement.value = 'hexadecimal';
    hexadecimalOptionElement.text = 'Hexadecimal';
    selectMenuToElement.add(binaryOptionElement);
    selectMenuToElement.add(hexadecimalOptionElement);

    document.getElementsByTagName('button')[0].addEventListener('click', clickEvent);
}