function solve(firstString, secondString){
    let firstNumber = Number(firstString);
    let secondNumber = Number(secondString);
    let result = 0;

    for(let i = firstNumber; i <= secondNumber; i++){
        result += i;
    }

    return result;
}
