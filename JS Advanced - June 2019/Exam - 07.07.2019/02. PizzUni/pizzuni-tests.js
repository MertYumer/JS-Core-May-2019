const PizzUni = require('./02. PizzUni_Ресурси');
const assert = require('chai').assert;

describe('PizzUni Tests', function () {
    let pizzUni;

    beforeEach(() => {
        pizzUni = new PizzUni();
    });

    it('constructor should have all properties', function () {
        assert.isTrue(pizzUni.hasOwnProperty('registeredUsers'));
        assert.isTrue(pizzUni.hasOwnProperty('availableProducts'));
        assert.isTrue(pizzUni.hasOwnProperty('orders'));

    });

    it('constructor should set all properties correctly', function () {
        assert.deepEqual(pizzUni.registeredUsers, []);

        assert.equal(JSON.stringify(pizzUni.availableProducts.pizzas),
            '["Italian Style","Barbeque Classic","Classic Margherita"]');

        assert.equal(JSON.stringify(pizzUni.availableProducts.drinks),
            '["Coca-Cola","Fanta","Water"]');

        assert.equal(JSON.stringify(pizzUni.availableProducts),
            '{"pizzas":["Italian Style","Barbeque Classic","Classic Margherita"],"drinks":["Coca-Cola","Fanta","Water"]}');

        assert.deepEqual(pizzUni.orders, []);
    });

    it('registerUser should throw error if user exists', function () {
        pizzUni.registeredUsers.push({email: 'abv.bg', orderHistory: []});

        assert.throw(() => pizzUni.registerUser('abv.bg'),
            'This email address (abv.bg) is already being used!');
    });

    it('registerUser should add the user to registeredUsers property', function () {
        pizzUni.registerUser({email: 'abv.bg', orderHistory: []});

        const expected = '[{"email":{"email":"abv.bg","orderHistory":[]},"orderHistory":[]}]';
        const actual = JSON.stringify(pizzUni.registeredUsers);

        assert.equal(actual, expected);
    });

    it('registerUser should return the correct user', function () {
        pizzUni.registerUser({email: 'abv.bg', orderHistory: []});

        const expected = '{"email":{"email":"abv.bg","orderHistory":[]},"orderHistory":[]}';
        const actual = JSON.stringify(pizzUni.registerUser({email: 'abv.bg', orderHistory: []}));

        assert.equal(actual, expected);
    });

    it('makeAnOrder should throw error if user doesn\'t exist', function () {
        assert.throw(() => pizzUni.makeAnOrder('abv.bg', 'pizza', 'cola'),
            'You must be registered to make orders!');
    });

    it('makeAnOrder should throw error if the searched pizza isn\'t available', function () {
        pizzUni.registerUser('abv.bg');

        assert.throw(() => pizzUni.makeAnOrder('abv.bg', 'pizza', 'cola'),
            'You must order at least 1 Pizza to finish the order.');
    });

    it('makeAnOrder should add pizza to user orders', function () {
        pizzUni.registerUser('abv.bg');
        pizzUni.makeAnOrder('abv.bg', 'Italian Style');

        const user = pizzUni.registeredUsers.find(u => u.email === 'abv.bg');

        const expected = [ { orderedPizza: 'Italian Style' } ];
        const actual = user.orderHistory;

        assert.deepEqual(actual, expected);
    });

    it('makeAnOrder should add pizza and cola to user orders', function () {
        pizzUni.registerUser('abv.bg');
        pizzUni.makeAnOrder('abv.bg', 'Italian Style', 'Water');

        const user = pizzUni.registeredUsers.find(u => u.email === 'abv.bg');

        const expected = [ { orderedPizza: 'Italian Style' , orderedDrink: 'Water'} ];
        const actual = user.orderHistory;

        assert.deepEqual(actual, expected);
    });

    it('makeAnOrder should add current order to orders property', function () {
        pizzUni.registerUser('abv.bg');
        pizzUni.makeAnOrder('abv.bg', 'Italian Style');

        const expected = '[{"orderedPizza":"Italian Style","email":"abv.bg","status":"pending"}]';
        const actual = JSON.stringify(pizzUni.orders);

        assert.equal(actual, expected);
    });

    it('makeAnOrder should add return the index of currentOrder', function () {
        pizzUni.registerUser('abv.bg');

        const expected = 0;
        const actual = pizzUni.makeAnOrder('abv.bg', 'Italian Style');

        assert.equal(actual, expected);
    });

    it('detailsAboutMyOrder return undefined if the order doesn\'t exist', function () {
        assert.isUndefined(pizzUni.detailsAboutMyOrder(-3));
    });

    it('detailsAboutMyOrder return the order status if the order exists', function () {
        pizzUni.registerUser('abv.bg');
        pizzUni.makeAnOrder('abv.bg', 'Italian Style');

        const expected = 'Status of your order: pending';
        const actual = pizzUni.detailsAboutMyOrder(0);

        assert.equal(actual, expected);
    });

    it('doesTheUserExist return undefined if the user doesn\'t exist', function () {
        assert.isUndefined(pizzUni.doesTheUserExist('abv.bg'));
    });

    it('doesTheUserExist return the searched user if he exists', function () {
        pizzUni.registerUser('abv.bg');

        const expected = '{"email":"abv.bg","orderHistory":[]}';
        const actual = JSON.stringify(pizzUni.doesTheUserExist('abv.bg'));

        assert.equal(actual, expected);
    });

    it('completeOrder return undefined if there are no orders', function () {
        assert.isUndefined(pizzUni.completeOrder());
    });

    it('completeOrder change the order\'s status', function () {
        pizzUni.registerUser('abv.bg');
        pizzUni.makeAnOrder('abv.bg', 'Italian Style');
        pizzUni.completeOrder();

        const expected = '[{"orderedPizza":"Italian Style","email":"abv.bg","status":"completed"}]';
        const actual = JSON.stringify(pizzUni.orders);

        assert.equal(actual, expected);
    });

    it('completeOrder return the completed order\'s index', function () {
        pizzUni.registerUser('abv.bg');
        pizzUni.makeAnOrder('abv.bg', 'Italian Style');

        const expected = '{"orderedPizza":"Italian Style","email":"abv.bg","status":"completed"}';
        const actual = JSON.stringify(pizzUni.completeOrder());

        assert.equal(actual, expected);
    });
});