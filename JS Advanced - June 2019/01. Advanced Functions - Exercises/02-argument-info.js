function solve() {
    let stats = {};
    console.log(arguments);
    for (let i = 0; i < arguments.length; i++) {
        let argument = arguments[i];
        let type = typeof argument;
        console.log(`${type}: ${argument}`);

        if (!stats[type]) {
            stats[type] = 0;
        }

        stats[type]++;
    }

    let sortedTypes = [];

    for (let type in stats) {
        sortedTypes.push([type, stats[type]]);
    }

    sortedTypes.sort((a, b) => b[1] - a[1]);

    for (let type of sortedTypes) {
        console.log(`${type[0]} = ${type[1]}`);
    }
}
