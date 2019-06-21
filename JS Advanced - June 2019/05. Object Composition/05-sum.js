function solve() {
    let firstElement;
    let secondElement;
    let resultElement;

    return {
        init: (selectorOne, selectorTwo, resultSelector) => {
            firstElement = $(selectorOne);
            secondElement = $(selectorTwo);
            resultElement = $(resultSelector);
        },

        add: () => resultElement.val(+firstElement.val() + +secondElement.val()),
        subtract: () => resultElement.val(+firstElement.val() - +secondElement.val())
    }
}