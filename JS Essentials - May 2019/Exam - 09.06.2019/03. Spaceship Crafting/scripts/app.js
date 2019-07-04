function spaceshipCrafting() {
    let titaniumCores = +document.getElementById('titaniumCoreFound').value;
    let aluminiumCores = +document.getElementById('aluminiumCoreFound').value;
    let magnesiumCores = +document.getElementById('magnesiumCoreFound').value;
    let carbonCores = +document.getElementById('carbonCoreFound').value;
    const lossPercent = +document.getElementById('lossesPercent').value / 4;

    titaniumCores -= titaniumCores * lossPercent / 100;
    aluminiumCores -= aluminiumCores * lossPercent / 100;
    magnesiumCores -= magnesiumCores * lossPercent / 100;
    carbonCores -= carbonCores * lossPercent / 100;

    let titaniumBars = Math.round(titaniumCores / 25);
    let aluminiumBars = Math.round(aluminiumCores / 50);
    let magnesiumBars = Math.round(magnesiumCores / 75);
    let carbonBars = Math.round(carbonCores / 100);

    const availableBars = document.querySelector('#availableBars p');
    const spaceshipsInfo = document.querySelector('#builtSpaceships p');
    const spaceships = [
        ['THE-UNDEFINED-SHIP', 0],
        ['NULL-MASTER', 0],
        ['JSON-CREW', 0],
        ['FALSE-FLEET', 0]
    ];

    while (titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1) {
        if (titaniumBars >= 7 && aluminiumBars >= 9 && magnesiumBars >= 7 && carbonBars >= 7) {
            spaceships[0][1]++;
            titaniumBars -= 7;
            aluminiumBars -= 9;
            magnesiumBars -= 7;
            carbonBars -= 7;
        }

        if (titaniumBars >= 5 && aluminiumBars >= 7 && magnesiumBars >= 7 && carbonBars >= 5) {
            spaceships[1][1]++;
            titaniumBars -= 5;
            aluminiumBars -= 7;
            magnesiumBars -= 7;
            carbonBars -= 5;
        }

        if (titaniumBars >= 3 && aluminiumBars >= 5 && magnesiumBars >= 5 && carbonBars >= 2) {
            spaceships[2][1]++;
            titaniumBars -= 3;
            aluminiumBars -= 5;
            magnesiumBars -= 5;
            carbonBars -= 2;
        }

        if (titaniumBars >= 2 && aluminiumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1) {
            spaceships[3][1]++;
            titaniumBars -= 2;
            aluminiumBars -= 2;
            magnesiumBars -= 3;
            carbonBars -= 1;
        }
    }

    availableBars.textContent = `${titaniumBars} titanium bars, ` +
        `${aluminiumBars} aluminum bars, ` +
        `${magnesiumBars} magnesium bars, ` +
        `${carbonBars} carbon bars`;

    const builtSpaceships = spaceships.filter(s => s[1] > 0);
    let result = [];

    for (let i = 0; i < builtSpaceships.length; i++) {
        result.push(`${builtSpaceships[i][1]} ${builtSpaceships[i][0]}`);
    }

    spaceshipsInfo.textContent = result.join(', ');
}