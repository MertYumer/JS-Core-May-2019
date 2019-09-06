const offerController = function () {
    const getDashboard = async function (context) {
        helper.addHeaderInfo(context);

        const url = `/appdata/${storage.appKey}/offers`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(helper.handler)
            .then(offers => {
                for (const offer of offers) {
                    const isCreator =
                        offer._acl.creator=== JSON.parse(storage.getData('userInfo'))._id;

                    offer.isCreator = isCreator;
                }

                context.offers = offers;
            });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/offers/dashboardView.hbs')
        });
    };

    const getCreateOffer = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/offers/createOfferView.hbs')
        });
    };

    const postCreateOffer = function (context) {
        const url = `/appdata/${storage.appKey}/offers`;
        const authorizationType = 'Kinvey';
        const data = {...context.params};

        if (data.product && data.description && data.price && data.pictureUrl) {
            requester
                .post(url, authorizationType, data)
                .then(helper.handler)
                .then(() => {
                    context.redirect('#/dashboard');
                });
        }
    };

    const getOfferDetails = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(helper.handler)
            .then(offer => {
                context.offer = offer;
            });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/offers/detailsOfferView.hbs')
        });
    };

    const getEditOffer = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(helper.handler)
            .then(offer => context.offer = offer);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/offers/editOfferView.hbs')
        });
    };

    const postEditOffer = function (context) {
        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        delete context.params.offerId;
        const authorizationType = 'Kinvey';
        const data = {...context.params};

        if (data.product && data.description && data.price && data.pictureUrl) {
            requester
                .put(url, authorizationType, data)
                .then(helper.handler)
                .then(() => {
                    context.redirect('#/dashboard');
                });
        }
    };

    const getDeleteOffer = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(helper.handler)
            .then(offer => context.offer = offer);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/offers/deleteOfferView.hbs')
        });
    };

    const postDeleteOffer = function (context) {
        const id = context.params.offerId;
        const url = `/appdata/${storage.appKey}/offers/${id}`;
        const authorizationType = 'Kinvey';

        requester
            .del(url, authorizationType)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/dashboard');
            });
    };

    const postBuyOffer = function (context) {
        const url = `/user/${storage.appKey}/${JSON.parse(storage.getData('userInfo'))._id}`;
        const authorizationType = 'Kinvey';

        const data = {
            username: JSON.parse(storage.getData('userInfo')).username,
            password: JSON.parse(storage.getData('userInfo')).password,
            numberOfPurchases: JSON.parse(storage.getData('userInfo')).numberOfPurchases + 1
        };

        requester
            .put(url, authorizationType, data)
            .then(helper.handler)
            .then(data => {
                storage.deleteUser();
                storage.saveUser(data);
                context.redirect('#/profile');
            });
    };

    return {
        getDashboard,
        getCreateOffer,
        postCreateOffer,
        getOfferDetails,
        getEditOffer,
        postEditOffer,
        getDeleteOffer,
        postDeleteOffer,
        postBuyOffer
    }
}();