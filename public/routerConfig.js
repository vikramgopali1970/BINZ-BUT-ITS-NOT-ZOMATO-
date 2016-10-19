/**
 * Created by vgopali on 17-10-2016.
 */

app.config(function ($stateProvider, $urlRouterProvider) {


    var home = {
        name : 'home',
        url : '/',
        controller: 'indexcntrrler',
        controllerAs: 'index',
        templateUrl : "app/Components/Home/home.html"
    };

    var viewResto = {
        name : 'view restaurant',
        url : '/viewRestaurant',
        controller: 'viewRestController',
        templateUrl : "app/Components/edit Restaurant/viewRestaurant.html"
    };
    
    var bookRestaurant = {
        name : 'Book Restaurent',
        url : '/bookRestaurant/:name?id?img',
        templateUrl : "app/Components/bookrestaurant/bookrestaurant.html"
    };

    var viewBookings = {
        name : 'View Bookings',
        url : '/viewRestaurant/bookings',
        templateUrl : "app/Components/viewBookings/viewBookings.html",
        controller : 'viewBookings'
    };

    var viewCustBooking = {
        name : 'View Customer Bookings',
        url : '/myBookings',
        templateUrl : "app/Components/checkbookingCustomer/checkCBooking.html",
        controller : 'viewCusBookings'
    };

    var addRestaurant = {
        name : 'Add Restaurent',
        url : '/addRestaurant',
        templateUrl : "app/Components/addRestaurant/addRestaurant.html",
        controller : 'addRestaurant'

    };
    $stateProvider.state(addRestaurant);
    $stateProvider.state(viewBookings);
    $stateProvider.state(viewResto);
    $stateProvider.state(bookRestaurant);
    $stateProvider.state(home);
    $urlRouterProvider.otherwise("/");
})