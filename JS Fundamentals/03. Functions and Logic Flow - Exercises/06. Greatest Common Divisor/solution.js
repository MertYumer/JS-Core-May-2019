function greatestCD() {
    function getGreatestCommonDivisor(firstNumber, secondNumber) {
        if (secondNumber === 0) {
            resultElement.textContent = firstNumber;
            return;
        }

        return getGreatestCommonDivisor(secondNumber, firstNumber % secondNumber);
    }

    let firstNumber = +document.getElementById('num1').value;
    let secondNumber = +document.getElementById('num2').value;
    let resultElement = document.getElementById('result');

    let buttonElement = document.getElementsByTagName('input')[2];
    buttonElement.addEventListener('click', getGreatestCommonDivisor(firstNumber, secondNumber));
}