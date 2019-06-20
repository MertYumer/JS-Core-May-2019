function solve(input) {
    let processor = (function () {
        let list = [];

        return {
            add: (argument) => {
                list.push(argument);
            },

            remove: (argument) => {
                list = list.filter(s => s !== argument);
            },

            print: () => {
                console.log(list.join(','));
            }
        };
    })();

    for (const element of input) {
        let args = element.split(' ');
        let command = args[0];
        let argument = args[1];

        processor[command](argument);
    }
}