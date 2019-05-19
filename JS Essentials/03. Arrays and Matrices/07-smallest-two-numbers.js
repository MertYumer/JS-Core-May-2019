function solve(array) {
    let smallestNumbers = [];

    for (let i = 0; i < 2; i++) {
        let index = array.indexOf(Math.min(...array));
        let smallestNumber = array[index];
        array.splice(index, 1);
        smallestNumbers.push(smallestNumber);
    }

    console.log(smallestNumbers.join(' '));
}
