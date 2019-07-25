const helper = function () {
    const handler = function (response) {
        if (response.status >= 400) {
            throw  new Error(`Something went wrong! ${response.statusText}`);
        }

        return response.json();
    };

    return {
        handler
    }
}();