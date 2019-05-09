function solve() {
    function decodeWord(word) {
        while (word.indexOf('!') !== -1) {
            word = word.replace('!', '1');
        }

        while (word.indexOf('%') !== -1) {
            word = word.replace('%', '2');
        }

        while (word.indexOf('#') !== -1) {
            word = word.replace('#', '3');
        }

        while (word.indexOf('$') !== -1) {
            word = word.replace('$', '4');
        }

        return word.toLowerCase();
    }

    let input = JSON.parse(document.getElementById('array').value);
    let result = document.getElementById('result');

    let specialKey = input[0];
    let pattern = new RegExp(`(?:^|\\s)(?:${specialKey})\\s+([A-Z!%$#]{8,})(?:\.|,|\\s|$)`, 'gi');

    for (let i = 1; i < input.length; i++) {
        let currentString = input[i];

        while (true) {
            let match = pattern.exec(currentString);

            if (match == null) {
                break;
            } else if (match[1].toUpperCase() === match[1]) {
                let decodedWord = decodeWord(match[1]);
                currentString = currentString.replace(match[1], decodedWord);
            }
        }

        let paragraphElement = document.createElement('p');
        paragraphElement.textContent = currentString;
        result.appendChild(paragraphElement);
    }
}