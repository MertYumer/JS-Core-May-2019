function solve(array) {
    array = array
        .map(n => n * 2)
        .filter((n,i)=> i % 2 === 1)
        .reverse();

    console.log(array.join(' '));
}
