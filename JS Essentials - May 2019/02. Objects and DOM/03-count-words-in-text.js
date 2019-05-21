function solve(input) {
    let pattern = /\w+/g;
    let words = input[0].match(pattern);
    let wordsStats = {};

    for (let word of words) {
        if (!wordsStats.hasOwnProperty(word)) {
            wordsStats[word] = 0;
        }

        wordsStats[word]++;
    }

    let result = JSON.stringify(wordsStats);
    console.log(result);
}