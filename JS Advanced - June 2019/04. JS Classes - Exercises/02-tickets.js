function solve(array, sortCriteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (const element of array) {
        const args = element.split('|');
        const destination = args[0];
        const price = +args[1];
        const status = args[2];

        const ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }

    switch (sortCriteria) {
        case 'destination':
            return tickets.sort((a, b) => a.destination.localeCompare(b.destination));

        case 'price':
            return tickets.sort((a, b) => a.price - b.price);

        case 'status':
            return tickets.sort((a, b) => a.status.localeCompare(b.status));
    }
}
