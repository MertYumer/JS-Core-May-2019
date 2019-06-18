class List {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (this.size > 0 && (index >= 0 && index < this.size)) {
            this.list.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (this.size > 0 && (index >= 0 && index < this.size)) {
            return this.list[index];
        }
    }
}
