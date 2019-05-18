function solve() {
    function checkFields() {
        let inputFields = document.getElementsByTagName('input');
        let table = document.getElementsByTagName('table')[0];
        let result = document.getElementsByTagName('p')[0];
        let completed = true;

        for (let i = 0; i <= 6; i += 3) {
            let firstNumber = inputFields[i].value;
            let secondNumber = inputFields[i + 1].value;
            let thirdNumber = inputFields[i + 2].value;

            let haveDifferentValues = firstNumber !== secondNumber
                && firstNumber !== thirdNumber && secondNumber !== thirdNumber;

            if (!firstNumber || !secondNumber || !thirdNumber || !haveDifferentValues) {
                completed = false;
                break;
            }
        }

        if (completed) {
            for (let i = 0; i < 3; i++) {
                let firstNumber = inputFields[i].value;
                let secondNumber = inputFields[i + 3].value;
                let thirdNumber = inputFields[i + 6].value;

                let haveDifferentValues = firstNumber !== secondNumber
                    && firstNumber !== thirdNumber && secondNumber !== thirdNumber;

                if (!firstNumber || !secondNumber || !thirdNumber || !haveDifferentValues) {
                    completed = false;
                    break;
                }
            }
        }

        if (completed) {
            table.style.border = "2px solid green";
            result.style.color = 'green';
            result.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = "2px solid red";
            result.style.color = 'red';
            result.textContent = 'NOP! You are not done yet...';
        }
    }

    function clearFields() {
        let inputFields = document.getElementsByTagName('input');

        for (let i = 0; i < inputFields.length; i++) {
            inputFields[i].value = '';
        }

        document.getElementsByTagName('table')[0].style.border = "none";
        document.getElementsByTagName('p')[0].textContent = '';
    }

    let quickCheckButton = document.getElementsByTagName('button')[0];
    let clearButton = document.getElementsByTagName('button')[1];

    quickCheckButton.addEventListener('click', checkFields);
    clearButton.addEventListener('click', clearFields);
}