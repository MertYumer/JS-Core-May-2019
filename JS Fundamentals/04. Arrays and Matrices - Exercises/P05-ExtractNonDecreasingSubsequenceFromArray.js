function solve(numbers) {
    let lastNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < numbers.length; i++) {
        if (+numbers[i] >= lastNumber) {
            lastNumber = +numbers[i];
            console.log(lastNumber);
        }
    }
}