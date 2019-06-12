(() => {
    let add = (firstVector, secondVector) => [firstVector[0] + secondVector[0], firstVector[1] + secondVector[1]];
    let multiply = (vector, scalar) => [vector[0] * scalar, vector[1] * scalar];
    let length = (vector) => Math.sqrt((vector[0] * vector[0]) + (vector[1] * vector[1]));
    let dot = (firstVector, secondVector) => (firstVector[0] * secondVector[0]) + (firstVector[1] * secondVector[1]);
    let cross = (firstVector, secondVector) => (firstVector[0] * secondVector[1]) - (firstVector[1] * secondVector[0]);

    return {
        add,
        multiply,
        length,
        dot,
        cross
    };
})();