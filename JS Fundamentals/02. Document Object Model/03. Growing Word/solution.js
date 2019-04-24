function solve() {
    let totalClicks = 0;

    document.querySelector('button').addEventListener('click', () => {
        let paragraph = document.getElementById('exercise').getElementsByTagName('p')[0];

        if (totalClicks % 3 == 0) {
            paragraph.style.color = 'blue';
        } else if (totalClicks % 3 == 1) {
            paragraph.style.color = 'green';
        } else if (totalClicks % 3 == 2) {
            paragraph.style.color = 'red';
        }

        totalClicks++;
        paragraph.style.fontSize = `${totalClicks * 2}px`;
    })
}