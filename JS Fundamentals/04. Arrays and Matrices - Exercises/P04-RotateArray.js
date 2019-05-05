function solve(array) {
    let rotations = +array.pop();

    rotations = array.length === 1
        ? 0
        : rotations;

    for (let i = 0; i < rotations % array.length; i++) {
        let lastElement = array.pop();
        array.unshift(lastElement);
    }

    console.log(array.join(' '));
}
