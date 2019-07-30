const app = Sammy('#rootElement', function () {
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);

    //User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);
    this.get('#/logout', userController.logout);
    this.get('#/profile', userController.getProfile);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);

    //Event
    this.get('#/create', eventController.getCreateEvent);

    this.post('#/create', eventController.postCreateEvent);

});

(() => {
    app.run('#/home');
})();