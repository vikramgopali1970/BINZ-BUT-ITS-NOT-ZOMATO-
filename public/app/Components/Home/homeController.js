/**
 * Created by vgopali on 16-10-2016.
 */

app.controller('indexcntrrler', ['$scope','Restaurants', function ($scope, Restaurants) {
    $scope.restaurantsListReg = [];

    Restaurants.RestaurantsList().then(function (results) {
        console.log('is it this',results.data);
        $scope.restaurantsListReg = results.data.restaurantList;
        Restaurants.saveRestaurantList(results.data.restaurantList);
    });

    $scope.setRestaurantIndex = function(index){
        console.log(index);
        Restaurants.selectedRestaurantIndex(index);
        console.log(Restaurants.getSelectedRestaurantIndex());
    }

    $scope.bookThis = function (bookRestaurant) {
        console.log(bookRestaurant);
        Restaurants.book(bookRestaurant).then(function (results) {
            console.log(results.data);
        })
    }
}]);