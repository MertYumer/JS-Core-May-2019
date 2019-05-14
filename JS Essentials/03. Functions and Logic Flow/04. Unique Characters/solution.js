function solve() {
    function isCharWhiteSpace(i) {
        if (string[i] === " ") {
            uniqueCharacters += string[i];
        }
    }

    function isCharUnique(i) {
        if (uniqueCharacters.indexOf(string[i]) === -1) {
            uniqueCharacters += string[i];
        }
    }

    function findUniqueCharacters(string) {
        for (let i = 0; i < string.length; i++) {
            isCharWhiteSpace(i);
            isCharUnique(i);
        }
    }

    let uniqueCharacters = '';
    let string = document.getElementById('string').value;

    findUniqueCharacters(string);
    document.getElementById('result').innerHTML = uniqueCharacters;
}