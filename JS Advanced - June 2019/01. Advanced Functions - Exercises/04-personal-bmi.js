function solve(name, age, weight, height) {
    age = +age;
    weight = +weight;
    height = +height;

    let person = {};
    person.name = name;
    person.personalInfo = {
        age: age,
        weight: weight,
        height: height
    };

    person.BMI = Math.round(weight / (Math.pow(height, 2) / 10000));

    if (person.BMI < 18.5) {
        person.status = "underweight";

    } else if (person.BMI < 25) {
        person.status = "normal";

    } else if (person.BMI < 30) {
        person.status = "overweight";

    } else if (person.BMI >= 30) {
        person.status = "obese";
        person.recommendation = "admission required";
    }

    return person;
}
