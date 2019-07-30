const storage = function () {
    const appKey = 'kid_S1L3Ic3GB';
    const appSecret = '7ef8ed99585b4fa5a4e57da05768dedf';

    const getData = function (key) {
        return localStorage.getItem(key + appKey);
    };

    const saveData = function (key, value) {
        localStorage.setItem(key + appKey, JSON.stringify(value));
    };

    const saveUser = function (data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);
    };

    const deleteUser = function () {
        localStorage.removeItem('userInfo' + appKey);
        localStorage.removeItem('authToken' + appKey);
    };

    return {
        getData,
        saveData,
        saveUser,
        deleteUser,
        appKey,
        appSecret
    };
}();