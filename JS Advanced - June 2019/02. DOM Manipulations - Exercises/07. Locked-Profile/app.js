function lockedProfile() {
    function showMore() {
        let profileElement = this.parentNode;
        let unlockedRadioElement = profileElement.getElementsByTagName('input')[1];
        let button = profileElement.getElementsByTagName('button')[0];
        let lockedInformationDiv = profileElement.children[9];

        if (unlockedRadioElement.checked && button.textContent === 'Show more') {
            lockedInformationDiv.style.display = 'block';
            button.textContent = 'Hide it';
        } else if (unlockedRadioElement.checked && button.textContent === 'Hide it') {
            lockedInformationDiv.style.display = 'none';
            button.textContent = 'Show more';
        }
    }

    let profileElements = document.getElementsByClassName('profile');

    Array.from(profileElements).forEach(p => {
        let button = p.getElementsByTagName('button')[0];
        button.addEventListener('click', showMore);
    });
}