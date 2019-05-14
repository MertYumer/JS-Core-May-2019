function solve(personData, workouts){
    let gender = personData[0];
    let weight = personData[1];
    let height = personData[2];
    let age = personData[3];
    let basicMetabolism;
    let activeFactor;
    
    if (gender == 'm'){
        basicMetabolism = 66 + 13.8 * weight + 5 * height - 6.8 * age;
    } else {
        basicMetabolism = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
    }
    
    if (workouts == 0){
        activeFactor = 1.2;
    } else if (workouts == 1 || workouts == 2){
        activeFactor = 1.375;
    } else if (workouts >= 3 || workouts <= 5){
        activeFactor = 1.55;
    } else if (workouts == 6 || workouts == 7){
        activeFactor = 1.725;
    } else {
        activeFactor = 1.90;
    }

    let calories = Math.round(basicMetabolism * activeFactor);
    console.log(calories);
}
