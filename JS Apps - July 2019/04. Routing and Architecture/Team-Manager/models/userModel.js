const userModel = function () {
    const register = function (params) {
        const data = {
            username: params.username,
            password: params.password
        };

        const url = `/user/${storage.appKey}`;
        const auth = btoa(`${storage.appKey}:${storage.appSecret}`);
        const authString = `Basic ${auth}`;

        const headers = {
            headers: {
                Authorization: authString
            },

            body: JSON.stringify(data)
        };

        return requester.post(url, headers);
    };

    return {
        register
    };
}();