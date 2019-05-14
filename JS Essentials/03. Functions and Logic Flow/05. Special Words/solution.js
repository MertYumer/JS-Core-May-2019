function solve() {
    function checkCurrentNumber(i){
        let p = document.createElement('p');

        if (i % 3 === 0 && i % 5 === 0){
            p.innerHTML = `${i} ${firstString}-${secondString}-${thirdString}`;
        } else if (i % 3 === 0){
            p.innerHTML = `${i} ${secondString}`;
        } else if (i % 5 === 0){
            p.innerHTML = `${i} ${thirdString}`;
        } else {
            p.innerHTML = i;
        }
        
        divResult.appendChild(p);
    }

    let startNumber = Number(document.getElementById('firstNumber').value);
    let secondNumber = Number(document.getElementById('secondNumber').value);
    let firstString = document.getElementById('firstString').value;
    let secondString = document.getElementById('secondString').value;
    let thirdString = document.getElementById('thirdString').value;
    let divResult = document.getElementById('result');

    for (let i = startNumber; i <= secondNumber; i++) {
        checkCurrentNumber(i);
    }
}