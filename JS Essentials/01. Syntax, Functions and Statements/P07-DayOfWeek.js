function solve(day) {
    function findNumberOfDay(day) {
        let index = week.indexOf(day);

        if (index !== -1) {
            console.log(index + 1);
        } else {
            console.log('error');
        }
    }

    let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    findNumberOfDay(day);
}
