const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    Handlebars.registerHelper("inc", function(value, options) {
        return parseInt(value) + 1;
    });
    //Home
    this.get('#/home', homeController.getHome);

    //User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.postLogout);

    this.get('#/profile', userController.getProfilePage);

    //Offer
    this.get('#/dashboard', offerController.getDashboard);
    this.get('#/offerDetails/:offerId', offerController.getOfferDetails);

    this.get('#/create', offerController.getCreateOffer);
    this.post('#/create', offerController.postCreateOffer);

    this.get('#/edit/:offerId', offerController.getEditOffer);
    this.post('#/edit/:offerId', offerController.postEditOffer);

    this.get('#/delete/:offerId', offerController.getDeleteOffer);
    this.post('#/delete/:offerId', offerController.postDeleteOffer);

    this.get('#/buy', offerController.postBuyOffer);
});

(() => {
    app.run('#/home');
})();