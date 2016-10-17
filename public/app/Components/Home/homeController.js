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
    return {
        RestaurantsList : getRestaurantsList
    }
});


app.controller('indexcntrrler', ['$scope','Restaurants', function ($scope, Restaurants) {
    $scope.restaurantsListReg = [];

    Restaurants.RestaurantsList().then(function (results) {
        console.log('is it this',results.data);
        $scope.restaurantsListReg = results.data.restaurantList;
    });

}]);