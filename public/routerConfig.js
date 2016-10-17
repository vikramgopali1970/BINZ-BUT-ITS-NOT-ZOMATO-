/**
 * Created by vgopali on 17-10-2016.
 */

app.config(function ($stateProvider, $urlRouterProvider) {


    var index = {
        name : 'index',
        url : '/',
        controller: 'indexcntrrler',
        templateUrl : "app/Components/Home/home.html"
    }

    var homePage = {
        name : 'home',
        url : '/home',
        templateUrl : "app/Components/Home/a.html"
    }

    $stateProvider.state(homePage);
    $stateProvider.state(index);
    $urlRouterProvider.otherwise("/");
})