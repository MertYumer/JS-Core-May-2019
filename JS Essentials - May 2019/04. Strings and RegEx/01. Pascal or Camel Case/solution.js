function solve() {
    function pascalOrCamelCase(input, currentCase) {
        let output = input
            .toLowerCase()
            .split(' ')
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join('');

        if (currentCase === 'Pascal Case') {
            result.innerHTML = output;
        } else if (currentCase === 'Camel Case') {
            result.innerHTML = output.replace(output[0], output[0].toLowerCase());
        } else {
            result.innerHTML = 'Error!';
        }
    }

    let input = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    pascalOrCamelCase(input, currentCase);
}