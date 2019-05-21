function solve(input) {
    let towns = {};

    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let income = +input[i + 1];

        if (!towns.hasOwnProperty(name)) {
            towns[name] = 0;
        }

        towns[name] += income;
    }

    let result = JSON.stringify(towns);
    console.log(result);
}
