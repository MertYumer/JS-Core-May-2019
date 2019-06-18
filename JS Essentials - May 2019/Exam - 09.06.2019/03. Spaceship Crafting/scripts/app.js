function spaceshipCrafting() {
    let titaniumCores = +document.getElementById('titaniumCoreFound').value;
    let aluminumCores = +document.getElementById('aluminiumCoreFound').value;
    let magnesiumCores = +document.getElementById('magnesiumCoreFound').value;
    let carbonCores = +document.getElementById('carbonCoreFound').value;
    let lossPercent = +document.getElementById('lossesPercent').value / 4;

    titaniumCores -= (titaniumCores * lossPercent / 100);
    aluminumCores -= (aluminumCores * lossPercent / 100);
    magnesiumCores -= (magnesiumCores * lossPercent / 100);
    carbonCores -= (carbonCores * lossPercent / 100);

    let titaniumBars = Math.round(titaniumCores / 25);
    let aluminumBars = Math.round(aluminumCores / 50);
    let magnesiumBars = Math.round(magnesiumCores / 75);
    let carbonBars = Math.round(carbonCores / 100);

    let availableBars = document.querySelector('#availableBars p');
    let builtSpaceships = document.querySelector('#builtSpaceships p');

    let undefinedShips = 0;
    let nullMasters = 0;
    let jsonCrews = 0;
    let falseFleets = 0;

    while (titaniumBars >= 2 && aluminumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1) {
        if (titaniumBars >= 7 && aluminumBars >= 9 && magnesiumBars >= 7 && carbonBars >= 7) {
            undefinedShips++;
            titaniumBars -= 7;
            aluminumBars -= 9;
            magnesiumBars -= 7;
            carbonBars -= 7;
        }

        if (titaniumBars >= 5 && aluminumBars >= 7 && magnesiumBars >= 7 && carbonBars >= 5) {
            nullMasters++;
            titaniumBars -= 5;
            aluminumBars -= 7;
            magnesiumBars -= 7;
            carbonBars -= 5;
        }

        if (titaniumBars >= 3 && aluminumBars >= 5 && magnesiumBars >= 5 && carbonBars >= 2) {
            jsonCrews++;
            titaniumBars -= 3;
            aluminumBars -= 5;
            magnesiumBars -= 5;
            carbonBars -= 2;
        }

        if (titaniumBars >= 2 && aluminumBars >= 2 && magnesiumBars >= 3 && carbonBars >= 1) {
            falseFleets++;
            titaniumBars -= 2;
            aluminumBars -= 2;
            magnesiumBars -= 3;
            carbonBars -= 1;
        }
    }

    let result = [];
    result.push(undefinedShips > 0 ? `${undefinedShips} THE-UNDEFINED-SHIP` : '');
    result.push(nullMasters > 0 ? `${nullMasters} NULL-MASTER` : '');
    result.push(jsonCrews > 0 ? `${jsonCrews} JSON-CREW` : '');
    result.push(falseFleets > 0 ? `${falseFleets} FALSE-FLEET` : '');

    availableBars.textContent = `${titaniumBars} titanium bars, ${aluminumBars} aluminum bars, ${magnesiumBars} magnesium bars, ${carbonBars} carbon bars`;
    builtSpaceships.textContent = result.filter(r => r !== '').join(', ');
}