function solve() {
    function getSum(input) {
        let sum = 0;
        let result = input;

        while (result.length > 1) {
            for (let char of result) {
                sum += +char;
            }

            result = sum.toString();
            sum = 0;
        }

        return +result;
    }

    function convertBinaryToChar(binary) {
        let decimal = parseInt(binary, 2);
        let char = String.fromCharCode(decimal);

        return char;
    }

    let input = document.getElementById('input').value;
    let result = document.getElementById('resultOutput');
    let sum = getSum(input);

    let slicedText = input.slice(sum, input.length - sum);
    console.log(slicedText);

    let output = slicedText
        .split(/([\d]{8})/g)
        .filter(x => x)
        .map(x => convertBinaryToChar(x))
        .filter(c => /[a-zA-Z ]+/g.test(c))
        .join('');

    result.textContent = output;
}
