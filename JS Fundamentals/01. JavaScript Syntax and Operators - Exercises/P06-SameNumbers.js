function solve(digits) {
    let areSame = true;
    let sum = 0;

    for (let i = 0; i < digits.toString().length; i++) {
        if (digits.toString()[0] !== digits.toString()[i] && areSame) {
            areSame = false;
        }

        sum += +digits.toString()[i];
    }

    console.log(areSame);
    console.log(sum);
}
