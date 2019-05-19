function solve(matrix) {
    let biggestElement = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > biggestElement) {
                biggestElement = matrix[row][col];
            }
        }
    }

    console.log(biggestElement);
}
