function solve(input) {
    let result = input.filter((n,i)=> i % 2 === 0);
    console.log(result.join(' '));
}