function solve(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += +matrix[i][i];
    }

    for (let i = matrix.length - 1, j = 0; i >= 0; i--, j++) {
        rightDiagonalSum += +matrix[j][i];
    }

    console.log(`${leftDiagonalSum} ${rightDiagonalSum}`);
}
