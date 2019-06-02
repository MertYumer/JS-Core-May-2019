const isSymmetric = require('./05-check-for-symmetry');

const assert = require('chai').assert;

describe('Check for symmetry Tests', function() {
    it('should return true when input array is symmetrical', function () {
        const inputArray = ['a', 'b', 'c', 'b', 'a'];

        const expected = true;
        const actual = isSymmetric(inputArray);

        assert.equal(actual, expected, 'Returns false but input array is symmetrical');
    });

    it('should return true when input array has elements of different types', function () {
        const inputArray = [1, 'text', {name: 'John'}, false, {name: 'John'}, 'text', 1];

        const expected = true;
        const actual = isSymmetric(inputArray);

        assert.equal(actual, expected, 'Returns false but input array is symmetrical')
    });

    it('should return true when empty array is given', function () {
        const inputArray = [];

        const expected = true;
        const actual = isSymmetric(inputArray);

        assert.equal(actual, expected, 'Returns false but input array is empty');
    });

    it('should return false when input array is not symmetrical', function () {
        const inputArray = [1, 2, 3, 4, 5];

        const expected = false;
        const actual = isSymmetric(inputArray);

        assert.equal(actual, expected, 'Returns true but input array is not symmetrical');
    });

    it('should return false if input is string', function () {
        const input = 'abc';

        const expected = false;
        const actual = isSymmetric(input);

        assert.equal(actual, expected, 'Returns true but input is not of correct type');
    });

    it('should return false if input is number', function () {
        const input = 5;

        const expected = false;
        const actual = isSymmetric(input);

        assert.equal(actual, expected, 'Returns true but input is not of correct type');
    });

    it('should return false if input is object', function () {
        let input = {};
        let expected = false;

        let actual = isSymmetric(input);

        assert.equal(actual, expected, 'Returns true but input is not of correct type');
    });
});