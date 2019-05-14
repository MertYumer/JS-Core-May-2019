function validate() {
    function getEGN() {
        function getYear(inputYear) {
            if (Number(inputYear) >= 1900 && Number(inputYear) <= 2100) {
                return `${String(inputYear).substring(2)}`;
            }
        }

        function getMonth(inputMonth) {
            let monthsNumbers = {
                'January': '01',
                'February': '02',
                'March': '03',
                'April': '04',
                'May': '05',
                'June': '06',
                'July': '07',
                'August': '08',
                'September': '09',
                'October': '10',
                'November': '11',
                'December': '12'
            };

            return monthsNumbers[inputMonth];
        }

        function getDate(inputDate) {
            if (Number(inputDate) < 10) {
                return `0${inputDate}`;
            } else {
                return `${inputDate}`;
            }
        }

        function getGender(inputGenders) {
            for (let i = 0; i < inputGenders.length; i++) {
                if (inputGenders[i].checked) {
                    if (inputGenders[i].value === 'Male') {
                        return 2;
                    } else {
                        return 1;
                    }
                }
            }
        }

        function getRegion(inputRegion) {
            if (Number(inputRegion) >= 43 && Number(inputRegion) <= 999) {
                if (Number(inputRegion) < 100) {
                    return `${inputRegion}`;
                } else {
                    return `${String(inputRegion).substring(0, 2)}`;
                }
            }
        }

        function getLastDigit(inputDigits) {
            let weights = [2, 4, 8, 5, 10, 9, 7, 3, 6];
            let sum = 0;

            for (let i = 0; i < 9; i++) {
                sum += Number(inputDigits[i]) * Number(weights[i]);
            }

            let remainder = sum % 11;

            if (Number(remainder) === 10) {
                remainder = 0;
            }

            return remainder;
        }

        let yearElement = document.getElementById('year');
        let year = getYear(yearElement.value);
        let monthElement = document.getElementById('month');
        let month = getMonth(monthElement.value);
        let dateElement = document.getElementById('date');
        let date = getDate(dateElement.value);
        let gendersElement = document.querySelectorAll('#exercise table tbody tr td input[name="gender"]');
        let gender = getGender(gendersElement);
        let regionElement = document.getElementById('region');
        let region = getRegion(regionElement.value);

        let egn = year + month + date + region + gender;
        let lastDigit = getLastDigit(egn);
        egn += lastDigit;

        let egnElement = document.getElementById('egn');
        egnElement.innerHTML = `Your EGN is: ${egn}`;

        yearElement.value = '';
        monthElement.selectedIndex = 0;
        dateElement.value = '';
        gendersElement.forEach((e) => {
            e.checked = false;
        });

        regionElement.value = '';
    }

    let button = document.getElementsByTagName('button')[0];
    button.addEventListener('click', getEGN);
}