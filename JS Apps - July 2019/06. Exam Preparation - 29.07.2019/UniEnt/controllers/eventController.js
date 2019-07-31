const eventController = function () {
    const getCreateEvent = function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/events/createEvent.hbs')
        });
    };

    const postCreateEvent = function (context) {
        eventModel
            .create(context.params)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/home');
            });
    };

    const getEventDetails = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        await eventModel.getDetails(context.params.eventId)
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
        const loggedIn = storage.getData('userInfo') !== null;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        await eventModel.getDetails(context.params.eventId)
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
        eventModel
            .edit(context.params)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/home');
            });
    };

    const postDeleteEvent = function (context) {
        eventModel
            .del(context.params.eventId)
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