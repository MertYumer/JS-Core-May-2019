function solve() {
    let sectionElements = document.getElementById('exercise').children;
    let sectionNumber = 0;
    let playerPoints = 0;
    let correctAnswers = ['2013', 'Pesho', 'Nakov'];
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', clickEvent);
    }

    function clickEvent() {
        let radioElements = sectionElements[sectionNumber].getElementsByTagName('input');
        let selectedRadio = selectedRadioElement(radioElements);

        function selectedRadioElement(radioElements) {
            for (let radioElement of radioElements) {
                if (radioElement.checked) {
                    return radioElement;
                }
            }
        }

        if (selectedRadio.value == correctAnswers[sectionNumber]) {
            playerPoints++;
        }

        sectionNumber++;

        if (sectionNumber == sectionElements.length) {
            let resultDivElement = document.getElementById('result');

            if (playerPoints == sectionElements.length) {
                resultDivElement.textContent = 'You are recognized as top SoftUni fan!';
            } else {
                resultDivElement.textContent = `You have ${playerPoints} right answers`;
            }

        } else {
            sectionElements[sectionNumber].style.display = 'block';
        }
    }
}