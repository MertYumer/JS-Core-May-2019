function getNext() {
    function getHailstoneSequence(number){
        while (number !== 1) {
            if (number % 2 === 0) {
                number /= 2;
            } else {
                number *= 3;
                number++;
            }

            array.push(number);
        }

        resultElement.textContent = array.join(' ') + ' ';
    }

    let number = document.getElementById('num').value;
    let resultElement = document.getElementById('result');
    let array = [number];

    let buttonElement = document.getElementsByTagName('input')[1];
    buttonElement.addEventListener('click', getHailstoneSequence(number));
}