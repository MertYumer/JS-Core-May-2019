function solve(elements) {
    function aggregate(elements, initialValue, func) {
        let value = initialValue;

        for (let i = 0; i < elements.length; i++) {
            value = func(value, elements[i]);
        }

        return value;
    }

    let sum = aggregate(elements, 0, (a, b) => a + b);
    let sumOfInverseValues = aggregate(elements, 0, (a, b) => a + (1 / b));
    let concatenatedString = aggregate(elements, '', (a, b) => a + b);

    console.log(sum);
    console.log(sumOfInverseValues);
    console.log(concatenatedString);
}

