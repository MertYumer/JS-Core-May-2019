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

    const login = function (params) {
        const url = `/user/${storage.appKey}/login`;
        const auth = btoa(`${params.username}:${params.password}`);
        const authString = `Basic ${auth}`;

        const headers = {
            headers: {
                Authorization: authString
            },

            body: JSON.stringify({...params})
        };

        return requester.post(url, headers);
    };

    const logout = function () {
        const url = `/user/${storage.appKey}/_logout`;
        const headers = {
            headers: {
            }
        };

        return requester.post(url, headers);
    };

    return {
        register,
        login,
        logout
    };
}();