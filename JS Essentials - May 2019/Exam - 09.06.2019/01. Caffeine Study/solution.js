function solve(days) {
    const coffee = 0.4;
    const cola = 0.08;
    const tea = 0.2;
    const energyDrink = 0.3;

    let consumedCaffeine = 0;

    for (let i = 1; i <= days; i++) {
        consumedCaffeine += (coffee * 450);
        consumedCaffeine += (tea * 1050);
        consumedCaffeine += (cola * 500);

        if (i % 5 === 0) {
            consumedCaffeine += (energyDrink * 1500);
        }

        if (i % 9 === 0) {
            consumedCaffeine += (cola * 1000);
            consumedCaffeine += (energyDrink * 1000);
        }
    }

    console.log(`${consumedCaffeine} milligrams of caffeine were consumed`);
}
