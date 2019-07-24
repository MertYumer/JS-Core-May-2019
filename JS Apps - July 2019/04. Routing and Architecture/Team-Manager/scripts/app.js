const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    this.get('#/home', homeController.getHome);

    this.get('#/register', userController.getRegister);
    this.post('#/register', userController.postRegister);

});

(() => {
    app.run('#/home');
})();