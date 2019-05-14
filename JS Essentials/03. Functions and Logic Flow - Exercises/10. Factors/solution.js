function solve() {
    function findAllFactors(number) {
        let factors = [];
        let factor = number;

        while (factor > 0) {
            if (number % factor === 0) {
                factors.push(factor);
            }

            factor--;
        }

        resultElement.textContent = factors.reverse().join(' ');
    }

    let number = document.getElementById('num').value;
    let resultElement = document.getElementById('result');

    let buttonElement = document.getElementsByTagName('input')[1];
    buttonElement.addEventListener('click', findAllFactors(number));
}