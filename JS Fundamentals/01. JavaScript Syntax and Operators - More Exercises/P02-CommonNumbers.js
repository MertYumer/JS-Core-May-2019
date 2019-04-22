function solve(firstArray, secondArray, thirdArray){
    let commonNumbers = [];
    let sum = 0;

    for (let i = 0; i < firstArray.length; i++) {
        if (secondArray.includes(firstArray[i]) && thirdArray.includes(firstArray[i])){
            commonNumbers.push(firstArray[i]);
            sum += firstArray[i];
        }
    }

    commonNumbers.sort();
    let average = sum / commonNumbers.length;
    let median = 0;
    let middleOfArray = Math.floor(commonNumbers.length / 2);

    if (commonNumbers.length % 2 == 1) {
        median = commonNumbers[middleOfArray];
    } else {
        let firstElement = commonNumbers[middleOfArray - 1];
        let secondElement = commonNumbers[middleOfArray];
        median = (firstElement + secondElement) / 2;
    }

    console.log(`The common elements are ${commonNumbers.join(", ")}.`);
    console.log(`Average: ${average}.`);
    console.log(`Median: ${median}.`);
}
