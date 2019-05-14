function solve() {
    function findCharacterCount(string, character) {
        for (let i = 0; i < string.length; i++) {
            if (string[i] === character) {
                count++;
            }
        }
    }

    function findIfCountIsEvenOrOdd(string, character) {
        result = count % 2 === 0
            ? `Count of ${character} is even.`
            : `Count of ${character} is odd.`;
    }

    let string = document.getElementById('string').value;
    let character = document.getElementById('character').value;
    let count = 0;
    let result = '';

    findCharacterCount(string, character);
    findIfCountIsEvenOrOdd(string, character);
    document.getElementById('result').innerHTML = result;
}