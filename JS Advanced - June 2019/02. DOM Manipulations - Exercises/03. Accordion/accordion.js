function toggle() {
    let spanElement = document.getElementsByClassName('button')[0];
    let divExtraElement = document.getElementById('extra');
    
    if (spanElement.textContent === 'More') {
        spanElement.textContent = 'Less';
        divExtraElement.style.display = 'block';
    } else {
        spanElement.textContent = 'More';
        divExtraElement.style.display = 'none';
    }
}