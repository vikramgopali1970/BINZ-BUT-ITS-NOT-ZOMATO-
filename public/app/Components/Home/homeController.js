/**
 * Created by vgopali on 16-10-2016.
 */
var app = angular.module('myApp', [
    'ui.router'
]);

app.factory('Restaurants',function ($http) {

    var getRestaurantsList = function(){
        return $http.get('/getdata', {}).success(function (data, status) {
            console.log(status);
        }).error(function (error) {
            console.log('error',error);
        });
    };

    var bookThis = function (bookRestaurant) {
        return $http.post('/bookthis',bookRestaurant).success(function (data,status) {
            console.log(status);
        }).error(function (err) {
            console.log('error occured',err);
        });
    }
    return {
        RestaurantsList : getRestaurantsList,
        book : bookThis
    }
});


app.controller('indexcntrrler', ['$scope','Restaurants', function ($scope, Restaurants) {
    $scope.restaurantsListReg = [];

    Restaurants.RestaurantsList().then(function (results) {
        console.log('is it this',results.data);
        $scope.restaurantsListReg = results.data.restaurantList;
    });

    $scope.bookThis = function (bookRestaurant) {
        console.log(bookRestaurant);
        Restaurants.book(bookRestaurant).then(function (results) {
            console.log(results.data);
        })
    }
}]);