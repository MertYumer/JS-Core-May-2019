const eventController = function () {
    const getCreateEvent = function (context) {
        const loggedIn = storage.getData('userInfo') !== null;

        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }

        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"

        }).then(function () {
            this.partial('./views/events/createEvent.hbs')
        });
    };

    const postCreateEvent = function (context) {
        eventModel
            .create(context.params)
            .then(helper.handler)
            .then(data => {
                homeController.getHome(context);
            });
    };

    return {
        getCreateEvent,
        postCreateEvent
    }
}();