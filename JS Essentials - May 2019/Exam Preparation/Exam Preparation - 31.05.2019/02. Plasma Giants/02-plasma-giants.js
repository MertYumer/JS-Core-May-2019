function solve(array, cutSize) {
    function splitArrayIntoNArrays(currentArray) {
        let matrix = [];

        for (let i = 0; i < currentArray.length; i += cutSize) {
            let currentPart = currentArray.slice(i, i + cutSize);
            matrix.push(currentPart);
        }

        return matrix;
    }

    function findProductOfParts(matrix) {
        let productArray = [];

        for (let i = 0; i < matrix.length; i++) {
            let product = 1;

            for (let j = 0; j < matrix[i].length; j++) {
                product *= matrix[i][j];
            }

            productArray.push(product);
        }

        return productArray;
    }

    function makeFight() {
        const damage = Math.min.apply(Math, array);
        const numberToReach = Math.max.apply(Math, array);
        let rounds = 1;
        let result = '';

        while (firstGiant > numberToReach && secondGiant > numberToReach && damage !== 0) {
            firstGiant -= damage;
            secondGiant -= damage;
            rounds++;
        }

        if (firstGiant > secondGiant) {
            result = `First Giant defeated Second Giant with result ${firstGiant} - ${secondGiant} in ${rounds} rounds`;
        } else if (firstGiant < secondGiant) {
            result = `Second Giant defeated First Giant with result ${secondGiant} - ${firstGiant} in ${rounds} rounds`;
        } else {
            result = `Its a draw ${firstGiant} - ${secondGiant}`;
        }

        console.log(result);
    }

    const firstPart = array.slice(0, array.length / 2);
    const secondPart = array.slice(array.length / 2);

    let firstMatrix = splitArrayIntoNArrays(firstPart);
    let secondMatrix = splitArrayIntoNArrays(secondPart);

    let firstProductArray = findProductOfParts(firstMatrix);
    let secondProductArray = findProductOfParts(secondMatrix);

    let firstGiant = (firstProductArray.reduce((a, b) => a + b));
    let secondGiant = (secondProductArray.reduce((a, b) => a + b));

    if (cutSize === 0) {
        firstGiant = 0;
        secondGiant = 0;
    }

    makeFight();
}
