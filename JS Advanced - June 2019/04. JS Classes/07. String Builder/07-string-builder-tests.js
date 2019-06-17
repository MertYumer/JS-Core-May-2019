const StringBuilder = require('./07-string-builder');

const assert = require('chai').assert;

describe('stringBuilder Tests', function () {
    let stringBuilder;

    beforeEach(function () {
        stringBuilder = new StringBuilder();
    });

    it('should be instantiated correctly without passed argument', function () {
        const expected = 0;
        const actual = stringBuilder._stringArray.length;

        assert.isDefined(stringBuilder);
        assert.equal(actual, expected);
    });

    it('should be instantiated correctly with passed undefined argument', function () {
        stringBuilder = new StringBuilder(undefined);

        const expected = 0;
        const actual = stringBuilder._stringArray.length;

        assert.isDefined(stringBuilder);
        assert.equal(actual, expected);
    });

    it('should be instantiated with passed argument', function () {
        stringBuilder = new StringBuilder('abc');

        const expected = 'abc';
        const actual = stringBuilder._stringArray.join('');

        assert.isDefined(stringBuilder);
        assert.equal(actual, expected);
    });

    it('should have _stringArray property', function () {
        assert.isTrue(stringBuilder.hasOwnProperty('_stringArray'));
    });

    it('should have _stringArray of type Array', function () {
        assert.isArray(stringBuilder._stringArray);
    });

    it('should have its function properties', function () {
        assert.isTrue(Object.getPrototypeOf(stringBuilder).hasOwnProperty('append'));
        assert.isTrue(Object.getPrototypeOf(stringBuilder).hasOwnProperty('prepend'));
        assert.isTrue(Object.getPrototypeOf(stringBuilder).hasOwnProperty('insertAt'));
        assert.isTrue(Object.getPrototypeOf(stringBuilder).hasOwnProperty('remove'));
        assert.isTrue(Object.getPrototypeOf(stringBuilder).hasOwnProperty('toString'));
    });
});