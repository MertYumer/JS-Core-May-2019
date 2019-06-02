const rgbToHexColor = require('./06-rgb-to-hex');

const assert = require('chai').assert;

describe('RGBToHex Tests', function () {
    it('should return correct hexColor', function () {
        let expected = '#FF9EAA';
        let actual = rgbToHexColor(255, 158, 170);
        assert.equal(actual, expected);

        expected = '#000000';
        actual = rgbToHexColor(0, 0, 0);
        assert.equal(actual, expected);

        expected = '#FFFFFF';
        actual = rgbToHexColor(255, 255, 255);
        assert.equal(actual, expected);
    });

    it('should return undefined with invalid red', function () {
        const expected = undefined;

        let actual = rgbToHexColor('abc', 0, 0);
        assert.equal(actual, expected);

        actual = rgbToHexColor(-1, 0, 0);
        assert.equal(actual, expected);

        actual = rgbToHexColor(256, 0, 0);
        assert.equal(actual, expected);
    });

    it('should return undefined with invalid green', function () {
        const expected = undefined;

        let actual = rgbToHexColor(0, 'abc', 0);
        assert.equal(actual, expected);

        actual = rgbToHexColor(0, -1, 0);
        assert.equal(actual, expected);

        actual = rgbToHexColor(0, 256, 0);
        assert.equal(actual, expected);
    });

    it('should return undefined with invalid blue', function () {
        const expected = undefined;

        let actual = rgbToHexColor(0, 0, 'abc');
        assert.equal(actual, expected);

        actual = rgbToHexColor(0, 0, -1);
        assert.equal(actual, expected);

        actual = rgbToHexColor(0, 0, 256);
        assert.equal(actual, expected);
    });
});