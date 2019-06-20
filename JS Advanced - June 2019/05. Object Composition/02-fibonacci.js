function getFibonator() {
    return (function () {
        let firstNumber = 0;
        let secondNumber = 1;
        
        return function () {
            let result = secondNumber;
            let sum = firstNumber + secondNumber;
            firstNumber = secondNumber;
            secondNumber = sum;

            return result;
        }
    })();
}
