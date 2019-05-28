function create(words) {
    let contentDivElement = document.getElementById('content');
    
    for (const word of words) {
        let pElement = document.createElement('p');
        pElement.textContent = word;
        pElement.style.display = 'none';
        let divElement = document.createElement('div');
        divElement.appendChild(pElement);

        divElement.addEventListener('click', (e) =>
            e.target.firstChild.style.display = 'block');

        contentDivElement.appendChild(divElement);
    }
}