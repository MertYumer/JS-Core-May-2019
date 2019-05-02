function solve() {
    function getNumber() {
        if (outputElement.textContent) {
            return +outputElement.textContent;
        } else {
            return +inputElement.value;
        }
    }

    function chop() {
        currentNumber = getNumber();
        currentNumber /= 2;
        outputElement.textContent = currentNumber;
    }

    function dice() {
        currentNumber = getNumber();
        currentNumber = Math.sqrt(currentNumber);
        outputElement.textContent = currentNumber;
    }

    function spice() {
        currentNumber = getNumber();
        currentNumber++;
        outputElement.textContent = currentNumber;
    }

    function bake() {
        currentNumber = getNumber();
        currentNumber *= 3;
        outputElement.textContent = currentNumber;
    }

    function fillet() {
        currentNumber = getNumber();
        currentNumber *= 0.8;
        outputElement.textContent = currentNumber;
    }

    let inputElement = document.querySelector('input');
    let outputElement = document.getElementById('output');

    let buttons = document.getElementsByTagName('button');
    let chopButton = buttons[0];
    let diceButton = buttons[1];
    let spiceButton = buttons[2];
    let bakeButton = buttons[3];
    let filletButton = buttons[4];
    let currentNumber = 0;

    chopButton.addEventListener('click', chop);
    diceButton.addEventListener('click', dice);
    spiceButton.addEventListener('click', spice);
    bakeButton.addEventListener('click', bake);
    filletButton.addEventListener('click', fillet);
}
