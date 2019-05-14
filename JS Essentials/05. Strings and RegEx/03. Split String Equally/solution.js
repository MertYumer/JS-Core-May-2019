function solve() {
    function splitStringEqually(string, number) {
        let output = [];
        let indexCounter = 0;

        if (string.length % number !== 0) {
            let length = string.length;
            let symbolsCount = 0;

            while (length % number !== 0) {
                length %= number;
                length++;
                symbolsCount++;
            }

            for (let i = 0; i < symbolsCount; i++) {
                string += string[indexCounter];
                indexCounter++;
            }
        }

        for (let i = 0; i < string.length; i += number) {
            output.push(string.substr(i, number));
        }

        result.innerHTML = output.join(' ');
    }

    let string = document.getElementById('text').value;
    let number = +document.getElementById('number').value;
    let result = document.getElementById('result');

    splitStringEqually(string, number);
}