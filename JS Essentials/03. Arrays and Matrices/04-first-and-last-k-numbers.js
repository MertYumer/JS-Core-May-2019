function solve(input) {
    let number = +input.shift();
    let firstKElements = input.slice(0, number);
    let lastKElements = input.slice(-number);

    console.log(firstKElements.join(' '));
    console.log(lastKElements.join(' '));
}
