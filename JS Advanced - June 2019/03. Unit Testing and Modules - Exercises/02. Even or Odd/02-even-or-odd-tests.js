const isOddOrEven = require('./02-even-or-odd');

const assert = require('assert');

describe('isOddOrEven Tests', function () {
    it('should return undefined if input is not a string', function () {
        const expected = undefined;

        assert.equal(isOddOrEven(true), expected);
        assert.equal(isOddOrEven(3), expected);
        assert.equal(isOddOrEven(['a', 'b', 'c']), expected);
        assert.equal(isOddOrEven({}), expected);
    });

    it('should return even if string length is even', function () {
        const expected = 'even';
        const actual = isOddOrEven('even');

        assert.equal(actual, expected);
    });

    it('should return odd if string length is odd', function () {
        const expected = 'odd';
        const actual = isOddOrEven('odd');

        assert.equal(actual, expected);
    });
});