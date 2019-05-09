function solve() {
    let input = document.getElementById('string').value.split(', ');
    let text = input[0];
    let command = input[1];
    let result = document.getElementById('result');

    let namePattern = new RegExp(` (([A-Z]([A-Za-z]*)?)(-[A-Z][A-Za-z]*\\.)?-([A-Z][A-Za-z]*)?) `, 'g');
    let airportPattern = new RegExp(' ([A-Z]{3}\\/[A-Z]{3}) ', 'g');
    let flightNumberPattern = new RegExp(' ([A-Z]{1,3}\\d{1,5}) ', 'g');
    let companyPattern = new RegExp('- ([A-Z][A-Za-z]*\\*[A-Z][A-Za-z]*) ', 'g');

    let name = namePattern.exec(text)[1].toString().replace(/\-/g, ' ');
    let flightNumber = flightNumberPattern.exec(text)[1].toString();
    let airports = airportPattern.exec(text)[1].toString().split('/');
    let fromAirport = airports[0];
    let toAirport = airports[1];
    let company = companyPattern.exec(text)[1].toString().replace('*', ' ');

    switch (command) {
        case 'name':
            result.textContent = `Mr/Ms, ${name}, have a nice flight!`;
            break;

        case 'flight':
            result.textContent = `Your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}.`;
            break;

        case 'company':
            result.textContent = `Have a nice flight with ${company}.`;
            break;

        case 'all':
            result.textContent = `Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`;
            break;
    }
}