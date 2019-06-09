function solve(days) {
    let mgCaffeine = 0;

    let drinks = {
        coffee: 0,
        tea: 0,
        cola: 0,
        energy: 0
    };

    for (let i = 1; i <= days; i++) {
        drinks['coffee'] += (3 * 150);
        drinks['cola'] += (2 * 250);
        drinks['tea'] += (3 * 350);

        if (i % 5 === 0) {
            drinks['energy'] += (3 * 500);
        }

        if (i % 9 === 0) {
            drinks['cola'] += (4 * 250);
            drinks['energy'] += (2 * 500);
        }
    }

    mgCaffeine += drinks['coffee'] / 100 * 40;
    mgCaffeine += drinks['cola'] / 100 * 8;
    mgCaffeine += drinks['tea'] / 100 * 20;
    mgCaffeine += drinks['energy'] / 100 * 30;

    console.log(`${mgCaffeine} milligrams of caffeine were consumed`);
}
