function calculate(number) {
    let sum = number;

    function add(nextNumber) {
        sum += nextNumber;
        return add;
    }

    add.toString = function () {
        return sum;
    };

    return add;
}
