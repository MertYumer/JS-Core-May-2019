const homeController = function () {
    const getHome = async function (context) {
        const loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;

            await eventModel.getAllEvents()
                .then(response => response.json())
                .then(events => {
                    context.events = events;
                });
        }

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',
            noEventsView: './views/events/noEvents.hbs',
            eventView: './views/events/eventView.hbs'

        }).then(function () {
            this.partial('./views/home/homePage.hbs')
        })
    };

    return {
        getHome
    }
}();