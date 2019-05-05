function solve(array) {
    array.sort((a, b) => {
        if (a.length > b.length) return 1;
        if (a.length < b.length) return -1;
        if (a > b) return 1;
        if (a < b) return -1;
    });

    array.forEach(x => console.log(x));
}