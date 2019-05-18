function solve() {
    function findAsciiEquivalent(input) {
        let text = input.split(' ').filter(c => c !== '');
        let output = '';

        for (let element of text) {
            if (Number(element)) {
                output += String.fromCharCode(element);
            } else {
                let charsAsciiCodes = [];

                for (let character of element) {
                    charsAsciiCodes.push(character.charCodeAt(0));
                }

                let p = document.createElement('p');
                p.textContent = charsAsciiCodes.join(' ');
                result.appendChild(p);
            }
        }

        let p = document.createElement('p');
        p.textContent = output;
        result.appendChild(p);
    }

    let input = document.getElementById('text').value;
    let result = document.getElementById('result');

    findAsciiEquivalent(input);
}