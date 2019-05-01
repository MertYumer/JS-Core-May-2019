function leapYear() {
    function checkYear() {
        let year = inputElement.value;
        yearElement.textContent = year;

        if (year % 4 === 0) {
            yearTypeElement.textContent = 'Leap Year';
        } else {
            yearTypeElement.textContent = 'Not Leap Year';
        }

        inputElement.value = '';
    }

    let inputElement = document.getElementsByTagName('input')[0];
    let yearTypeElement = document.querySelector('h2');
    let yearElement = document.querySelector('#year div');
    let buttonElement = document.querySelector('button');

    buttonElement.addEventListener('click', checkYear);
}