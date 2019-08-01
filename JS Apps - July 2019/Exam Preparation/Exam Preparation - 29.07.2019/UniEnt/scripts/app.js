const app = Sammy('#rootElement', function () {
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);

    //User
    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

    this.get('#/login', userController.getLogin);
    this.post('#/login', userController.postLogin);

    this.get('#/logout', userController.postLogout);
    this.get('#/profile', userController.getProfile);

    //Event
    this.get('#/eventDetails/:eventId', eventController.getEventDetails);

    this.get('#/create', eventController.getCreateEvent);
    this.post('#/create', eventController.postCreateEvent);

    this.get('#/edit/:eventId', eventController.getEditEvent);
    this.post('#/edit/:eventId', eventController.postEditEvent);

    this.get('#/delete/:eventId', eventController.postDeleteEvent);
});

(() => {
    app.run('#/home');
})();