function solve(firstNumber, secondNumber, operator) {
    let calc = (firstNumber, secondNumber, operator) => operator(firstNumber, secondNumber);
    let add = (firstNumber, secondNumber) => firstNumber + secondNumber;
    let subtract = (firstNumber, secondNumber) => firstNumber - secondNumber;
    let multiply = (firstNumber, secondNumber) => firstNumber * secondNumber;
    let divide = (firstNumber, secondNumber) => firstNumber / secondNumber;

    switch (operator) {
        case '+': return calc(firstNumber, secondNumber, add);
        case '-': return calc(firstNumber, secondNumber, subtract);
        case '*': return calc(firstNumber, secondNumber, multiply);
        case '/': return calc(firstNumber, secondNumber, divide);
    }
}