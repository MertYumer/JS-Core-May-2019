function solve() {
    function replaceCertainWord(array, searchedWord) {
        let wordToReplace = array[0].split(' ').filter(a => a !== '')[2];
        let regex = new RegExp(wordToReplace, 'gi');

        for (let sentence of array) {
            sentence = sentence.replace(regex, searchedWord);
            let p = document.createElement('p');
            p.innerHTML = sentence;
            result.appendChild(p);
        }
    }

    let array = JSON.parse(document.getElementById("text").value);
    let searchedWord = document.getElementById("word").value;
    let result = document.getElementById('result');

    replaceCertainWord(array, searchedWord);
}