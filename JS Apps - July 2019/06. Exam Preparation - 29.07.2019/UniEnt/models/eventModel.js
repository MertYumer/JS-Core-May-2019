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

    const getDetails = function (id) {
        const url = `/appdata/${storage.appKey}/events/${id}`;

        const headers = {
            headers: {},
        };

        return requester.get(url, headers);
    };

    const edit = function (params) {
        const url = `/appdata/${storage.appKey}/events/${params.eventId}`;
        delete params.eventId;

        const data = {
            ...params
        };

        const headers = {
            headers: {},
            body: JSON.stringify(data)
        };

        return requester.put(url, headers);
    };

    const del = function (id) {
        const url = `/appdata/${storage.appKey}/events/${id}`;

        const headers = {
            headers: {},
        };

        return requester.del(url, headers);
    };

    return {
        create,
        getAllEvents,
        getDetails,
        edit,
        del
    }
}();