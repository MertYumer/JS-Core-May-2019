const eventController = function () {
    const getCreateEvent = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/events/createEvent.hbs')
        });
    };

    const postCreateEvent = function (context) {
        const url = `/appdata/${storage.appKey}/events`;
        const authorizationType = 'Kinvey';

        const data = {
            ...context.params,
            organizer: JSON.parse(storage.getData('userInfo')).username,
            peopleInterestedIn: 0
        };

        requester
            .post(url, authorizationType, data)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/home');
            });
    };

    const getEventDetails = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.eventId;
        const url = `/appdata/${storage.appKey}/events/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(event => {
                context.event = event;
                context.isCreator = JSON.parse(storage.getData('userInfo')).username === event.organizer;
            });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/events/detailsEvent.hbs')
        });
    };

    const getEditEvent = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.eventId;
        const url = `/appdata/${storage.appKey}/events/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(event => context.event = event);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/events/editEvent.hbs')
        });
    };

    const postEditEvent = function (context) {
        const id = context.params.eventId;
        const url = `/appdata/${storage.appKey}/events/${id}`;
        delete context.params.eventId;
        const authorizationType = 'Kinvey';

        const data = {
            ...context.params
        };

        requester
            .put(url, authorizationType, data)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/home');
            });
    };

    const postDeleteEvent = function (context) {
        const id = context.params.eventId;
        const url = `/appdata/${storage.appKey}/events/${id}`;
        const authorizationType = 'Kinvey';

        requester
            .del(url, authorizationType)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/home');
            });
    };

    return {
        getCreateEvent,
        postCreateEvent,
        getEventDetails,
        getEditEvent,
        postEditEvent,
        postDeleteEvent
    }
}();