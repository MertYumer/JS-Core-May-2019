function getData() {
    let input = JSON.parse(document.getElementsByTagName('textarea')[0].value);

    let peopleInSection = document.querySelector('#peopleIn p');
    let peopleOutSection = document.querySelector('#peopleOut p');
    let blacklistSection = document.querySelector('#blacklist p');

    let peopleInList = [];
    let peopleOutList = [];
    let blacklist = [];

    for (let i = 0; i < input.length - 1; i++) {
        let currentPerson = {
            firstName: input[i].firstName,
            lastName: input[i].lastName
        };

        let action = input[i].action;

        if (action === 'peopleIn') {
            let personIndex = blacklist.findIndex(p =>
                p.firstName === currentPerson.firstName
                && p.lastName === currentPerson.lastName);

            if (personIndex === -1) {
                peopleInList.push(currentPerson);
            }
        }

        if (action === 'peopleOut' || action === 'blacklist') {
            if (action === 'blacklist') {
                blacklist.push(currentPerson);
            }

            let personIndex = peopleInList.findIndex(p =>
                p.firstName === currentPerson.firstName
                && p.lastName === currentPerson.lastName);

            if (personIndex !== -1) {
                peopleInList.splice(personIndex, 1);
                peopleOutList.push(currentPerson);
            }
        }
    }

    let sortCriteria = input[input.length - 1]["criteria"];
    let selectedSection = input[input.length - 1]["action"];
    
    if (sortCriteria === 'firstName' || sortCriteria === 'lastName') {
        if (selectedSection === 'peopleIn') {
            peopleInList.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        } else if (selectedSection === 'peopleOut') {
            peopleOutList.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        } else if (selectedSection === 'blacklist') {
            blacklist.sort((a, b) => a[sortCriteria].localeCompare(b[sortCriteria]));
        }
    }

    peopleInList.forEach(x => peopleInSection.textContent += JSON.stringify(x) + ' ');
    peopleOutList.forEach(x => peopleOutSection.textContent += JSON.stringify(x) + ' ');
    blacklist.forEach(x => blacklistSection.textContent += JSON.stringify(x) + ' ');
}