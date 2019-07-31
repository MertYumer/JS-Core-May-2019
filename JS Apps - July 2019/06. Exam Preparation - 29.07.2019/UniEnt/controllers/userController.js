const userController = function () {
    const getRegister = function (context) {
        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"

        }).then(function () {
            this.partial('./views/user/registerPage.hbs')
        });
    };

    const getLogin = function (context) {
        context.loadPartials({
            header: "./views/common/header.hbs",
            footer: "./views/common/footer.hbs"

        }).then(function () {
            this.partial('./views/user/loginPage.hbs')
        });
    };

    const getProfile= function (context) {
        const loggedIn = storage.getData('userInfo') !== null;
        context.loggedIn = loggedIn;

        if (loggedIn) {
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.username = username;
        }

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs'

        }).then(function () {
            this.partial('./views/user/userPage.hbs')
        });
    };

    const postRegister = function (context) {
        userModel
            .register(context.params)
            .then(helper.handler)
            .then(data => {
                storage.saveUser(data);
                context.redirect('#/home');
            });
    };

    const postLogin = function (context) {
        userModel
            .login(context.params)
            .then(helper.handler)
            .then(data => {
                storage.saveUser(data);
                context.redirect('#/home');
            });
    };

    const logout = function (context) {
        userModel
            .logout()
            .then(helper.handler)
            .then(() => {
                storage.deleteUser();
                context.redirect('#/home');
            });
    };

    return {
        getRegister,
        getLogin,
        getProfile,
        postRegister,
        postLogin,
        logout
    }
}();