const helper = function () {
    const handler = function (response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`);
        }

        if (response.status !== 204) {
            response = response.json();
        }

        return response;
    };

    const addHeaderInfo = function (context) {
        const loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if (loggedIn) {
            context.username = JSON.parse(storage.getData('userInfo')).username;
        }
    };

    const validateRegistration = function (params) {
        const isValid = params.username
            && params.password
            && params.rePassword
            && params.password === params.rePassword;

        return isValid;
    };

    return {
        handler,
        addHeaderInfo,
        validateRegistration
    };
}();