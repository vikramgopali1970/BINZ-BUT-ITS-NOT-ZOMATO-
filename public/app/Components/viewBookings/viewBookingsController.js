/**
 * Created by vgopali on 19-10-2016.
 */


app.controller('viewBookings', ['$scope','Restaurants', function ($scope, Restaurants) {
    $scope.bookings = [];
    Restaurants.getBookingList().then(function (results) {
        console.log(results.data.result);
        $scope.bookings = results.data.result;
    });
    
}]);