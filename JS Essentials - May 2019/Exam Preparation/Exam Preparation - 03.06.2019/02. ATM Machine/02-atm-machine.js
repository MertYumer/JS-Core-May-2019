function solve(commands) {
    function withdraw(accountBalance, moneyToWithdraw) {
        let withdraw = moneyToWithdraw;

        for (let i = 0; i < balanceInATM.length; i++) {
            const banknote = balanceInATM[i];

            if (banknote <= moneyToWithdraw) {
                moneyToWithdraw -= banknote;
                amountInATM -= banknote;
                balanceInATM.splice(i, 1);
                i--;

                if (moneyToWithdraw === 0) {
                    accountBalance -= withdraw;
                    return `You get ${withdraw}$. Account balance: ${accountBalance}$. Thank you!`;
                }
            }
        }
    }

    let balanceInATM = [];
    let amountInATM = 0;

    for (const command of commands) {
        if (command.length > 2) {
            let insertedMoney = 0;

            for (const banknote of command) {
                balanceInATM.push(banknote);
                insertedMoney += banknote;
            }

            balanceInATM.sort((a, b) => b - a);
            amountInATM += insertedMoney;
            console.log(`Service Report: ${insertedMoney}$ inserted. Current balance: ${amountInATM}$.`);

        } else if (command.length === 2) {
            const accountBalance = command[0];
            const moneyToWithdraw = command[1];

            if (accountBalance < moneyToWithdraw) {
                console.log(`Not enough money in your account. Account balance: ${accountBalance}$.`);
            } else if (amountInATM < moneyToWithdraw) {
                console.log('ATM machine is out of order!');
            } else {
                let withdrawResult = withdraw(accountBalance, moneyToWithdraw);
                console.log(withdrawResult);
            }

        } else if (command.length === 1) {
            const searchedBanknote = command[0];
            let count = 0;

            for (const banknote of balanceInATM) {
                if (banknote === searchedBanknote) {
                    count++;
                }
            }

            console.log(`Service Report: Banknotes from ${searchedBanknote}$: ${count}.`);
        }
    }
}
