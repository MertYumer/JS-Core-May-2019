function solve() {
    let myObject = {
        __proto__: {},

        extend: function (template) {
            for (const propertyName of Object.getOwnPropertyNames(template)) {
                if (typeof(template[propertyName]) === 'function') {
                    Object.setPrototypeOf(this, template);
                } else {
                    this[propertyName] = template[propertyName];
                }
            }
        }
    };

    return myObject;
}