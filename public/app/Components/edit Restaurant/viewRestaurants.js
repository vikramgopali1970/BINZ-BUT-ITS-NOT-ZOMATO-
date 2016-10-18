/**
 * Created by vgopali on 18-10-2016.
 */

app.controller('viewRestController', ['$scope', 'Restaurants', function ($scope, Restaurants) {
    //console.log(Restaurants.getRestaurantSelected());
    $scope.item = Restaurants.getRestaurantSelected();
    $scope.user = {
        table: $scope.item.tables,
        capacity: $scope.item.capacity
    };

    $scope.deleteResto = function () {
        console.log('inside delete restro');
        if(confirm("Do you Want to delete the restaurant?")){
            console.log('true');
            Restaurants.removeRestaurant().then(function (results) {
                console.log(results.data.success);
            });
        }else{
            console.log('false');
        }
    };
    
    $scope.viewBookings = function () {
        console.log('inside view all bookings');

    };

    $scope.updateAtributes = function () {
            console.log('inside update attributes');
            Restaurants.updateRestaurant($scope.user.table, $scope.user.capacity).then(function (results) {
                console.log(results.data);
        });
    };
}]);