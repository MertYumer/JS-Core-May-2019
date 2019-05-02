function solve() {
    function getMatrix(input) {
        let arrays = input.split('], ');
        let matrix = [];

        for (let i = 0; i < arrays.length; i++) {
            let row = arrays[i].replace(/\s/g, '').match(/\d+/g);
            matrix.push(row);
        }

        return matrix;
    }

    function getDotProduct(matrixOne, matrixTwo) {
        let result = [];
        let currentProduct = 0;

        for (let i = 0; i < matrixOne.length; i++) {
            result[i] = [];

            for (let j = 0; j < matrixTwo.length; j++) {

                for (let k = 0; k < matrixTwo[j].length; k++) {
                    currentProduct += matrixOne[i][k] * matrixTwo[j][k];
                }

                result[i][j] = currentProduct;
                currentProduct = 0;
            }
        }

        return result;
    }

    function displayResult(result) {
        for (let i = 0; i < result.length; i++) {
            let paragraph = document.createElement('p');
            paragraph.textContent = result[i].join(', ');
            resultElement.appendChild(paragraph);
        }
    }

    let firstMatrixElement = document.getElementById('mat1');
    let secondMatrixElement = document.getElementById('mat2');
    let resultElement = document.getElementById('result');

    let matrixOne = getMatrix(firstMatrixElement.value);
    let matrixTwo = getMatrix(secondMatrixElement.value);
    let resultMatrix = getDotProduct(matrixOne, matrixTwo);

    let buttonElement = document.getElementsByTagName('input')[1];
    buttonElement.addEventListener('click', displayResult(resultMatrix));
}