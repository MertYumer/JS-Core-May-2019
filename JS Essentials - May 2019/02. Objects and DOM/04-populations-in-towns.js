function solve(input) {
    let towns = {};

    for (let town of input) {
        let name = town.split(' <-> ')[0];
        let population = +town.split(' <-> ')[1];

        if (!towns.hasOwnProperty(name)) {
            towns[name] = 0;
        }

        towns[name] += population;
    }

    for (let town of Object.entries(towns)) {
        console.log(`${town[0]} : ${town[1]}`);
    }
}