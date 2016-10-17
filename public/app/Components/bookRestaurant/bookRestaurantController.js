/**
 * Created by vgopali on 18-10-2016.
 */

app.factory('bookings',function ($http) {

    var addBooking = function (bookDate,bookTime,bookDuration,email_id) {
        $http.post('/bookingRestaurants',{'date':bookDate,'time':bookTime,'dur':bookDuration,'email_d':email_id}).success(function (data, status) {
            console.log(status);
        }).error(function (err) {
            console.log('error occured',err);
        });
    };

    return{
        bookings : addBooking
    }
});

app.controller('bookingRestaurant',['$scope','bookings', function ($scope,bookings) {

    
    $scope.confirmRestaurant = function () {
        console.log($scope.bookDate,$scope.bookTime,$scope.bookDuration,$scope.email_id);
        bookings.bookings($scope.bookDate,$scope.bookTime,$scope.bookDuration).then(function (results) {
            console.log('is it this',results.data);
        });
    }
}]);