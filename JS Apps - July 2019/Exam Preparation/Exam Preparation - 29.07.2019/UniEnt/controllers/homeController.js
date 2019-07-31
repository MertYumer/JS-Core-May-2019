const homeController = function () {
    const getHome = async function (context) {
        helper.addHeaderInfo(context);

        if (context.loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;

            const url = `/appdata/${storage.appKey}/events`;
            const authorizationType = 'Kinvey';

            await requester.get(url, authorizationType)
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