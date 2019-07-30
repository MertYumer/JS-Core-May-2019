const helper = function () {
    const handler = function (response) {
        if (response.status >= 400 && response.status !== 204) {
            throw  new Error(`Something went wrong! ${response.statusText}`);
        }

        if (response.status === 204) {
            return response;
        }

        return response.json();
    };

    return {
        handler
    }
}();