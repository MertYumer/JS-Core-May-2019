(function () {
    let id = 0;

    return class Extensible {
        constructor() {
            this.id = id++;
        }

        extend(template) {
            for (const property in template) {
                if (typeof template[property] === 'function') {
                    Extensible.prototype[property] = template[property];
                } else {
                    this[property] = template[property];
                }
            }
        }
    }
})();