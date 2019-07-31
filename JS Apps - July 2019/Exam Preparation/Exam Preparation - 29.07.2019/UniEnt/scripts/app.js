const app = Sammy('#rootElement', function () {
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);

    //User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);
    this.get('#/logout', userController.postLogout);
    this.get('#/profile', userController.getProfile);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);

    //Event
    this.get('#/create', eventController.getCreateEvent);
    this.get('#/eventDetails/:eventId', eventController.getEventDetails);
    this.get('#/edit/:eventId', eventController.getEditEvent);
    this.get('#/delete/:eventId', eventController.postDeleteEvent);

    this.post('#/create', eventController.postCreateEvent);
    this.post('#/edit/:eventId', eventController.postEditEvent);
});

(() => {
    app.run('#/home');
})();