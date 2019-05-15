function solve(elements) {
    let object = {};

    for (let i = 0; i < elements.length; i += 2) {
        let property = elements[i];
        let value = +elements[i + 1];
        object[property] = value;
    }

    console.log(object);
}
