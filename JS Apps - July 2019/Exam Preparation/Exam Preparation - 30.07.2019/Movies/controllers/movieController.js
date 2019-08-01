const movieController = function () {
    const getAllMovies = async function (context) {
        helper.addHeaderInfo(context);

        const url = `/appdata/${storage.appKey}/movies`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(movies => {
                context.movies = movies;
            });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/movies/allMoviesView.hbs')
        });
    };

    const getMyMovies = async function (context) {
        helper.addHeaderInfo(context);

        const url = `/appdata/${storage.appKey}/movies?query={"_acl.creator":"${JSON.parse(storage.getData('userInfo'))._id}"}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(movies => {
                context.movies = movies;
            });

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

    const postCreateMovie = function (context) {
        const url = `/appdata/${storage.appKey}/movies`;
        const authorizationType = 'Kinvey';

        const data = {...context.params};

        requester
            .post(url, authorizationType, data)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/myMovies');
            });
    };

    const getMovieDetails = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.movieId;
        const url = `/appdata/${storage.appKey}/movies/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(movie => {
                context.movie = movie;
            });

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/movies/detailsMovie.hbs')
        });
    };

    const getEditMovie = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.movieId;
        const url = `/appdata/${storage.appKey}/movies/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(movie => context.movie = movie);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/movies/editMovie.hbs')
        });
    };

    const postEditMovie = function (context) {
        const id = context.params.movieId;
        const url = `/appdata/${storage.appKey}/movies/${id}`;
        delete context.params.movieId;
        const authorizationType = 'Kinvey';

        const data = {
            ...context.params
        };

        requester
            .put(url, authorizationType, data)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/myMovies');
            });
    };

    const getDeleteMovie = async function (context) {
        helper.addHeaderInfo(context);

        const id = context.params.movieId;
        const url = `/appdata/${storage.appKey}/movies/${id}`;
        const authorizationType = 'Kinvey';

        await requester.get(url, authorizationType)
            .then(response => response.json())
            .then(movie => context.movie = movie);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/movies/deleteMovie.hbs')
        });
    };

    const postDeleteMovie = function (context) {
        const id = context.params.movieId;
        const url = `/appdata/${storage.appKey}/movies/${id}`;
        const authorizationType = 'Kinvey';

        requester
            .del(url, authorizationType)
            .then(helper.handler)
            .then(() => {
                context.redirect('#/myMovies');
            });
    };

    return {
        getAllMovies,
        getMyMovies,
        getCreateMovie,
        postCreateMovie,
        getMovieDetails,
        getEditMovie,
        postEditMovie,
        getDeleteMovie,
        postDeleteMovie
    };
}();