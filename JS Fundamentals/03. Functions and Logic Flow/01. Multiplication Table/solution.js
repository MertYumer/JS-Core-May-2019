function solve() {
    function findWrongInput(number, multiplier){
        if (number > multiplier){
            document.getElementById('result').innerHTML = 'Try with other numbers.';
        }
    }

    function printTable(number, multiplier){
        for (let i = number; i <= multiplier; i++) {
            let result = i * multiplier;
            let p = document.createElement('p');
            p.innerHTML = `${i} * ${multiplier} = ${result}`;
            divResult.appendChild(p);
        }
    }

    let number = Number(document.getElementById('num1').value);
    let multiplier = Number(document.getElementById('num2').value);
    let divResult = document.getElementById('result');

    divResult.innerHTML = '';
    findWrongInput(number, multiplier);
    printTable(number, multiplier);
}