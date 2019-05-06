function solve(rows, columns) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }

    let counter = 1;
    let startCol = 0;
    let endCol = columns - 1;
    let startRow = 0;
    let endRow = rows - 1;

    while (startCol <= endCol && startRow <= endRow) {
        for (let col = startCol; col <= endCol; col++) {
            matrix[startRow][col] = counter;
            counter++;
        }

        startRow++;

        for (let row = startRow; row <= endRow; row++) {
            matrix[row][endCol] = counter;
            counter++;
        }

        endCol--;

        for (let col = endCol; col >= startCol; col--) {
            matrix[endRow][col] = counter;
            counter++;
        }

        endRow--;

        for (let row = endRow; row >= startRow; row--) {
            matrix[row][startCol] = counter;
            counter++;
        }

        startCol++;
    }

    for (let row = 0; row < matrix.length; row++) {
        console.log(matrix[row].join(' '));
    }
}