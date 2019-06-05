function solve(orders) {
    let price = 0;
    let totalIncome = 0;

    for (const order of orders) {
        const input = order.split(', ');

        const coins = input[0];
        const drink = input[1];

        if (drink === 'coffee') {
            price = input[2] === 'caffeine'
                ? 0.80
                : 0.90;

        } else if (drink === 'tea') {
            price = 0.80;
        }

        if (input[input.length - 2] === 'milk') {
            const milkPrice = Math.round(price) / 10;
            price += milkPrice;
        }

        if (!isNaN(input[input.length - 1])) {
            if (+input[input.length - 1] > 0) {
                price += 0.1;
            }
        }

        if (coins >= price) {
            totalIncome += price;
            const change = coins - price;
            console.log(`You ordered ${drink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`);
        } else {
            const neededMoney = price - coins;
            console.log(`Not enough money for ${drink}. Need ${neededMoney.toFixed(2)}$ more.`);
        }
    }

    console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}
