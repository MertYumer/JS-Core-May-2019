const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);

    //User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);
    this.get('#/logout', userController.logout);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);
});

(() => {
    app.run('#/home');
})();