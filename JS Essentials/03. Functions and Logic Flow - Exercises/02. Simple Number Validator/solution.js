function validate() {
    function validateDigits() {
        let digits = inputElement.value;
        let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let sum = 0;

        for (let i = 0; i < 9; i++) {
            sum += Number(digits[i]) * Number(weights[i]);
        }

        let remainder = sum % 11;

        if (remainder === 10) {
            remainder = 0;
        }

        if (+digits[9] === remainder) {
            resultElement.textContent = 'This number is Valid!';
        } else {
            resultElement.textContent = 'This number is NOT Valid!';
        }
    }

    let inputElement = document.getElementsByTagName('input')[0];
    let buttonElement = document.getElementsByTagName('button')[0];
    let resultElement = document.getElementById('response');

    buttonElement.addEventListener('click', validateDigits);
}
