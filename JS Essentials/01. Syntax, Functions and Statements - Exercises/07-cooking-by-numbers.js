function solve(args) {
    function chop(currentNumber) {
        return currentNumber / 2;
    }

    function dice(currentNumber) {
        return Math.sqrt(currentNumber);
    }

    function spice(currentNumber) {
        return currentNumber + 1;
    }

    function bake(currentNumber) {
        return currentNumber * 3;
    }

    function fillet(currentNumber) {
        return currentNumber * 0.8;
    }

    let currentNumber = +args[0];
    let commands = args.slice(1);

    for (let command of commands) {
        switch (command) {
            case 'chop':
                currentNumber = chop(currentNumber);
                break;

            case 'dice':
                currentNumber = dice(currentNumber);
                break;

            case 'spice':
                currentNumber = spice(currentNumber);
                break;

            case 'bake':
                currentNumber = bake(currentNumber);
                break;

            case 'fillet':
                currentNumber = fillet(currentNumber);
                break;
        }

        console.log(currentNumber);
    }
}
