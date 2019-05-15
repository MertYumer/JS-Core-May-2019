function  solve(firstNumber, secondNumber, thirdNumber) {
    let result = firstNumber;
    
    if (result < secondNumber){
        result = secondNumber;
    }
    
    if (result < thirdNumber){
        result = thirdNumber;
    }

    console.log("The largest number is " + result + ".");
}
