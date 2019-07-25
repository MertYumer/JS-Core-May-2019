const requester = function () {
    const baseUrl = 'https://baas.kinvey.com';

    const get = function (url, headers) {
        headers.method = 'GET';
        return makeRequest(url, headers);
    };

    const post = function (url, headers) {
        headers.method = 'POST';
        return makeRequest(baseUrl + url, headers);
    };

    const put = function (url, headers) {
        headers.method = 'PUT';
        return makeRequest(url, headers);
    };

    const del = function (url, headers) {
        headers.method = 'DELETE';
        return makeRequest(url, headers);
    };

    const makeRequest = function (url, headers) {
        headers.headers['Content-Type'] = 'application/json';
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