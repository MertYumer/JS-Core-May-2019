const storage = function () {
    const appKey = 'kid_Hy-cxd4Gr';
    const appSecret = 'f3ad3db42e9646f5a16e153e58d70119';

    const getData = function (key) {
        return localStorage.getItem(key + appKey);
    };

    const saveData = function (key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    };

    const saveUser = function (data) {
        saveData('userInfo', data);
        saveData('authToken', data._kmd.authtoken);

    };

    const deleteUser = function () {
        localStorage.removeItem('userInfo');
        localStorage.removeItem('authToken');
    };

    return {
        getData,
        saveData,
        saveUser,
        deleteUser,
        appKey,
        appSecret
    };
};