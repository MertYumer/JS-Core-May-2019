function solve() {
    function convert(degrees, temperatureType){
        if (temperatureType.toLowerCase() === 'fahrenheit'){
            convertedTemperature = (((degrees - 32) * 5) / 9);
            correctType = true;
        } else if (temperatureType.toLowerCase() === 'celsius'){
            convertedTemperature = (((degrees * 9) / 5) + 32);
            correctType = true;
        }
    }

    function printResult(){
        if (correctType){
            result = Math.round(convertedTemperature);
        } else{
            result = 'Error!';
        }
    }

    let degrees = Number(document.getElementById('num1').value);
    let temperatureType = document.getElementById('type').value;
    let result = '';
    let convertedTemperature = 0;
    let correctType = false;

    convert(degrees, temperatureType);
    printResult(degrees, temperatureType);
    document.getElementById('result').innerHTML = result;
}