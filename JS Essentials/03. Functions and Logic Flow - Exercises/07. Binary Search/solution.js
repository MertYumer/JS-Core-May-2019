function binarySearch() {
    function searchNumber(arrayElement){
        let array = Array.from(arrayElement.value.split(', '));
        let index = array.indexOf(number);

        if (index > -1) {
            resultElement.innerHTML = `Found ${number} at index ${index}`;
        } else {
            resultElement.innerHTML = `${number} is not in the array`;
        }
    }

    let arrayElement = document.getElementById('arr');
    let number = document.getElementById('num').value;
    let resultElement = document.getElementById('result');

    let buttonElement = document.getElementsByTagName('input')[2];
    buttonElement.addEventListener('click', searchNumber(arrayElement));
}