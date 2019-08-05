function solve(wagonCapacity, passengers) {
    const train = [];
    let leftPassengers = 0;

    for (let i = 0; i < passengers.length; i++) {
        leftPassengers += passengers[i];

        if (leftPassengers <= wagonCapacity) {
            train.push(leftPassengers);
            leftPassengers = 0;
        } else {
            train.push(wagonCapacity);
            leftPassengers -= wagonCapacity;
        }
    }

    console.log(train);

    if (leftPassengers) {
        console.log(`Could not fit ${leftPassengers} passengers`);
    } else {
        console.log('All passengers aboard');
    }
}