function subsum(array, startIndex, endIndex) {
    if (!Array.isArray(array)) {
        return NaN;
    }

    if (!array.every(n => +n)) {
        return NaN;
    }

    if (array.length === 0) {
        return 0;
    }

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= array.length) {
        endIndex = array.length - 1;
    }

    const sum = array
        .slice(startIndex, endIndex + 1)
        .reduce((a, b) => a + b);

    return sum;
}
