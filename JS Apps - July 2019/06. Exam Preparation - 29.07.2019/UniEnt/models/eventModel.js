const eventModel = function () {
    const create = function (params) {
        const data = {
            ...params,
            organizer: JSON.parse(storage.getData('userInfo')).username,
            peopleInterestedIn: 0
        };

        const url = `/appdata/${storage.appKey}/events`;

        const headers = {
            headers: {},
            body: JSON.stringify(data)
        };

        return requester.post(url, headers);
    };

    const getAllEvents = function () {
        const url = `/appdata/${storage.appKey}/events`;

        const headers = {
            headers: {},
        };

        return requester.get(url, headers);
    };

    return {
        create,
        getAllEvents
    }
}();