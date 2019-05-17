function solve() {
    function addToList() {
        let inputElement = document.getElementsByTagName('input')[0];
        let input = inputElement.value;
        let charCode = input.charCodeAt(0);

        if ((charCode >= 65 && charCode <= 90)
        || (charCode >= 97 && charCode <= 122)) {
            let columnNumber = charCode <= 90
                ? charCode - 65
                : charCode - 97;

            if (columns[columnNumber].textContent) {
                columns[columnNumber].textContent += `, ${input}`;
            } else {
                columns[columnNumber].textContent += input;
            }
        }

        inputElement.value = '';
    }

    let buttonElement = document.getElementsByTagName('button')[0];
    let columns = document.getElementsByTagName('li');

    buttonElement.addEventListener('click', addToList);
}