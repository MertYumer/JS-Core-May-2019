function solve(wagonCapacity, passengers) {
    let train = [];
    let length = passengers.length;
    let leftPassengers = 0;

    for (let i = 0; i < length; i++) {
        leftPassengers += passengers.shift();

        if (leftPassengers <= wagonCapacity) {
            train.push(leftPassengers);
            leftPassengers = 0;

        } else {
            train.push(wagonCapacity);
            leftPassengers -= wagonCapacity;
        }
    }

    console.log(train);

    if (leftPassengers === 0) {
        console.log('All passengers aboard');
    } else {
        console.log(`Could not fit ${leftPassengers} passengers`);
    }
}
