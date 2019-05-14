function solve() {
    let keyword = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let result = document.getElementById('result');

    let messagePattern = new RegExp(`${keyword}(.+)${keyword}`, "gi");
    let message = `Message: ${messagePattern.exec(text)[1]}`;

    let degreesPattern = /(north|east)[\s\S]*?(\d{2})[^,]*,[^,]*?(\d{6})/gi;
    let northDegrees;
    let eastDegrees;

    let currentDegreesMatch = degreesPattern.exec(text);

    while (currentDegreesMatch) {
        if (currentDegreesMatch[1].toLowerCase() === 'north') {
            northDegrees = `${currentDegreesMatch[2]}.${currentDegreesMatch[3]} N`;
        }
        else if (currentDegreesMatch[1].toLowerCase() === 'east') {
            eastDegrees = `${currentDegreesMatch[2]}.${currentDegreesMatch[3]} E`;
        }

        currentDegreesMatch = degreesPattern.exec(text);
    }

    let northParagraph = document.createElement('p');
    northParagraph.textContent = northDegrees;
    result.appendChild(northParagraph);

    let eastParagraph = document.createElement('p');
    eastParagraph.textContent = eastDegrees;
    result.appendChild(eastParagraph);

    let messageParagraph = document.createElement('p');
    messageParagraph.textContent = message;
    result.appendChild(messageParagraph);
}