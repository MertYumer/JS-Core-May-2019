function solve(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;

    matrix = matrix.map(row => row.split(' '));

    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += +matrix[i][i];
    }

    for (let i = matrix.length - 1, j = 0; i >= 0; i--, j++) {
        rightDiagonalSum += +matrix[j][i];
    }

    if (leftDiagonalSum === rightDiagonalSum) {
        for (let i = 0, k = matrix.length - 1; i < matrix.length; i++, k--) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (i !== j && k !== j) {
                    matrix[i][j] = leftDiagonalSum;
                }
            }
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}