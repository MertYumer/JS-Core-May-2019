const requester = function () {
    const get = function (url, headers) {
        headers.method = 'GET';
        makeRequest(url, headers);
    };

    const post = function (url, headers) {
        headers.method = 'POST';
        makeRequest(url, headers);
    };

    const put = function (url, headers) {
        headers.method = 'PUT';
        makeRequest(url, headers);
    };

    const del = function (url, headers) {
        headers.method = 'DELETE';
        makeRequest(url, headers);
    };

    const makeRequest = function (url, headers) {
        //headers.headers['Content-Type'] = 'application/json';
        //TODO Authorization Kinvey
        return fetch(url, headers);
    };

    return {
        get,
        post,
        put,
        del
    }
}();