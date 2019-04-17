function solve(firstString, secondString, thirdString){
    let firstStringLength = firstString.length;
    let secondStringLength = secondString.length;
    let thirdStringLength = thirdString.length;
    let sumLength = firstStringLength + secondStringLength + thirdStringLength;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}
