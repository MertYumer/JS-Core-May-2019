function spaceshipCrafting() {
    const cores = {
        titanium: document.getElementById('titaniumCoreFound').value,
        aluminum: document.getElementById('aluminiumCoreFound').value,
        magnesium: document.getElementById('magnesiumCoreFound').value,
        carbon: document.getElementById('carbonCoreFound').value
    };

    let lossesPercent = document.getElementById('lossesPercent').value / 4;
    lossesPercent = (100 - lossesPercent) / 100;

    const bars = {
        titanium: Math.round((cores.titanium * lossesPercent) / 25),
        aluminum: Math.round((cores.aluminum * lossesPercent) / 50),
        magnesium: Math.round((cores.magnesium * lossesPercent) / 75),
        carbon: Math.round((cores.carbon * lossesPercent) / 100)
    };

    const ships = {
        'The-Undefined-Ship': 0,
        'Null-Master': 0,
        'JSON-Crew': 0,
        'False-Fleet': 0,
    };

    while (bars.titanium >= 2 && bars.aluminum >= 2 && bars.magnesium >= 3 && bars.carbon >= 1) {
        if (bars.titanium >= 7 && bars.aluminum >= 9 && bars.magnesium >= 7 && bars.carbon >= 7) {
            bars.titanium -= 7;
            bars.aluminum -= 9;
            bars.magnesium -= 7;
            bars.carbon -= 7;
            ships['The-Undefined-Ship']++;
        }

        if (bars.titanium >= 5 && bars.aluminum >= 7 && bars.magnesium >= 7 && bars.carbon >= 5) {
            bars.titanium -= 5;
            bars.aluminum -= 7;
            bars.magnesium -= 7;
            bars.carbon -= 5;
            ships['Null-Master']++;
        }

        if (bars.titanium >= 3 && bars.aluminum >= 5 && bars.magnesium >= 5 && bars.carbon >= 2) {
            bars.titanium -= 3;
            bars.aluminum -= 5;
            bars.magnesium -= 5;
            bars.carbon -= 2;
            ships['JSON-Crew']++;
        }

        if (bars.titanium >= 2 && bars.aluminum >= 2 && bars.magnesium >= 3 && bars.carbon >= 1) {
            bars.titanium -= 2;
            bars.aluminum -= 2;
            bars.magnesium -= 3;
            bars.carbon -= 1;
            ships['False-Fleet']++;
        }
    }

    const availableBars = document
        .getElementById('availableBars')
        .getElementsByTagName('p')[0];

    availableBars.textContent =
        `${bars.titanium} titanium bars, `
        + `${bars.aluminum} aluminum bars, `
        + `${bars.magnesium} magnesium bars, `
        + `${bars.carbon} carbon bars`;

    const builtSpaceships = document
        .getElementById('builtSpaceships')
        .getElementsByTagName('p')[0];

    const result = [];

    for (const ship in ships) {
        if (ships[ship]) {
            result.push(`${ships[ship]} ${ship.toUpperCase()}`)
        }
    }

    builtSpaceships.textContent = result.join(', ');
}