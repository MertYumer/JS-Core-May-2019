const app = Sammy('#container', function () {
    this.use('Handlebars', 'hbs');

    //Home
    this.get('#/home', homeController.getHome);

    //User
    this.get('#/register', userController.getRegister);
    this.get('#/login', userController.getLogin);
    this.get('#/logout', userController.postLogout);

    this.post('#/register', userController.postRegister);
    this.post('#/login', userController.postLogin);

    //Movie
    this.get('#/cinema', movieController.getAllMovies);
    this.get('#/myMovies', movieController.getMyMovies);
    this.get('#/eventDetails/:movieId', movieController.getMovieDetails);

    this.get('#/create', movieController.getCreateMovie);
    this.post('#/create', movieController.postCreateMovie);

    this.get('#/edit/:movieId', movieController.getEditMovie);
    this.post('#/edit/:movieId', movieController.postEditMovie);

    this.get('#/delete/:movieId', movieController.getDeleteMovie);
    this.post('#/delete/:movieId', movieController.postDeleteMovie);
});

(() => {
    app.run('#/home');
})();