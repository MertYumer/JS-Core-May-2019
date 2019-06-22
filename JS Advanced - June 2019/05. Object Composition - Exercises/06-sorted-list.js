function sortedList() {
    let elements = [];

    return {
        size: 0,

        add: function(element) {
            elements.push(element);
            elements = elements.sort((a, b) => a - b);
            this.size++;

            return elements;
        },

        remove: function(index) {
            if (index >= 0 && index < elements.length) {
                elements.splice(index, 1);
                this.size--;

                return elements;
            }
        },

        get: function(index) {
            if (index >= 0 && index < elements.length) {
                return elements[index];
            }
        }
    }
}