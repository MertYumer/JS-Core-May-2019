function solve(coordinates) {
    function checkDistance(x1, y1, x2, y2) {
        let a = x1 - x2;
        let b = y1 - y2;
        let distance = Math.sqrt((a * a) + (b * b));

        if (Number.isInteger(distance)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }

    let x1 = +coordinates[0];
    let y1 = +coordinates[1];
    let x2 = +coordinates[2];
    let y2 = +coordinates[3];

    checkDistance(x1, y1, 0, 0);
    checkDistance(x2, y2, 0, 0);
    checkDistance(x1, y1, x2, y2);
}
