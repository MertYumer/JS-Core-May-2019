const movieController = function () {
    const getAllMovies = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/movies/allMoviesView.hbs')
        });
    };

    const getMyMovies = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/movies/myMoviesView.hbs')
        });
    };

    const getCreateMovie = function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/movies/createMovie.hbs')
        });
    };

    return {
        getAllMovies,
        getMyMovies,
        getCreateMovie
    };
}();