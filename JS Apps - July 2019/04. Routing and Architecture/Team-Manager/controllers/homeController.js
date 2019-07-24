const homeController = function () {
    const getHome = function (context) {
        /*console.log(storage.getData('userInfo'));
        const loggedIn = storage.getData('userInfo') !== null;
        if(loggedIn){
            const username = JSON.parse(storage.getData('userInfo')).username;
            context.loggedIn = loggedIn;
            context.username = username;
        }*/

        context.loadPartials({
            header: '../views/common/header.hbs',
            footer: '../views/common/footer.hbs'
        }).then(function(){
            this.partial('../views/home/home.hbs')
        });
    };

    return {
        getHome
    };
}();