const homeController = function () {
    const getHome = async function (context) {
        helper.addHeaderInfo(context);

        context.loadPartials({
            header: './views/common/header.hbs',
            footer: './views/common/footer.hbs',

        }).then(function () {
            this.partial('./views/home/homePage.hbs')
        })
    };

    return {
        getHome
    }
}();