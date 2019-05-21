function solve(input) {
    let negativeNumbers = input.filter(n => n < 0).reverse();
    let otherNumbers = input.filter(n => n >= 0);

    let result = negativeNumbers.concat(otherNumbers);
    result.forEach(n => console.log(n));
}