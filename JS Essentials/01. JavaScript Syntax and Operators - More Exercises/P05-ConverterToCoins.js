function solve(number, coinValues) {
    coinValues.sort(function(a, b){return b-a});
    let usedCoins = [];
    let sum = 0;

    for (let i = 0; i < coinValues.length; i++) {
        while (sum + coinValues[i] <= number) {
            usedCoins.push(coinValues[i]);
            sum += coinValues[i];
        }
    }

    console.log(usedCoins.join(", "));
}
