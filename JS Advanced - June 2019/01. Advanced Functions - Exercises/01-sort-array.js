function solve(arr, sortOrder) {
    return arr
        .map(Number)
        .sort((a, b) => {
            if(sortOrder === 'asc') {
                return a - b;

            } else if (sortOrder === 'desc') {
                return b - a;
            }
        });
}
