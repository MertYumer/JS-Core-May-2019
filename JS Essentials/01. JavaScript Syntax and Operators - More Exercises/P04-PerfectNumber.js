function solve(numbers) {
    let perfectNumbers = [];

    for (let i = 0; i < numbers.length; i++){
        let positiveDivisorsSum = 0;

        for (let j = numbers[i] - 1; j > 0; j--){
            if (numbers[i] % j == 0) {
                positiveDivisorsSum += j;
            }
        }

        if (positiveDivisorsSum == numbers[i]){
            perfectNumbers.push(numbers[i]);
        }
    }

    if (perfectNumbers.Length == 0){
        console.log(`No perfect number`);
    } else {
        console.log(perfectNumbers.join(", "));
    }
}
