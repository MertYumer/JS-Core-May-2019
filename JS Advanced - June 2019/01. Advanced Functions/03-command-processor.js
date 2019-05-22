function solve(array) {
    let closure = (function () {
        let currentString = '';

        return {
            append: (str) => currentString += str,
            removeStart: (n) => currentString = currentString.slice(n),
            removeEnd: (n) => currentString = currentString.slice(0, currentString.length - n),
            print: () => console.log(currentString)
        }
    })();

    for (let currentString of array) {
        let [comm, value] = currentString.split(' ');
        closure[comm](value);
    }
}