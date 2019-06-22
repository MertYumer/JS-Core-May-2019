(function () {
    String.prototype.ensureStart = function (string) {
        if (!this.startsWith(string)) {
            return string + this.toString();
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (string) {
        if (!this.endsWith(string)) {
            return this.toString() + string;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        const ellipsis = '...';

        if (this.toString().length <= n) {
            return this.toString();
        }

        if (!this.toString().includes(' ')) {
            return this.toString().slice(0, n - 3) + ellipsis;
        }

        if (n < 4) {
            return ellipsis.slice(0, n);
        }

        let currentString = this.toString();

        while (currentString.length + ellipsis.length > n) {
            let words = currentString.split(' ');
            words.pop();
            currentString = words.join(' ');
        }

        return currentString + ellipsis;
    };

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            string = string.replace(`{${i}}`, params[i]);
        }

        return string;
    }
})();