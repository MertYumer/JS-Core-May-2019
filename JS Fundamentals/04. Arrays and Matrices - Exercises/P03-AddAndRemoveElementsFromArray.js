function solve(commands) {
    let element = 1;
    let array = [];

    for (let command of commands) {
        if (command === 'add') {
            array.push(element);
        } else if (command === 'remove') {
            array.pop();
        }

        element++;
    }

    if (array.length === 0) {
        console.log('Empty');
    } else {
        array.forEach(x => console.log(x))
    }
}