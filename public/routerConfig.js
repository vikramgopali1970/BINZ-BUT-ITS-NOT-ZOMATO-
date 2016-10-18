/**
 * Created by vgopali on 17-10-2016.
 */

app.config(function ($stateProvider, $urlRouterProvider) {


    var home = {
        name : 'home',
        url : '/',
        controller: 'indexcntrrler',
        templateUrl : "app/Components/Home/home.html"
    }

    var addRestaurant = {
        name : 'Add Restaurent',
        url : '/addRestaurant/:name?id',
        templateUrl : "app/Components/bookrestaurant/bookrestaurant.html",
    }

    $stateProvider.state(addRestaurant);
    $stateProvider.state(home);
    $urlRouterProvider.otherwise("/");
})