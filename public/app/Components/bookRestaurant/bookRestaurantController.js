/**
 * Created by vgopali on 18-10-2016.
 */

app.factory('bookings',function ($http) {

    var addBooking = function (bookingObj) {
        return $http.post('/bookingRestaurants',bookingObj).success(function (data, status) {
            console.log(status);
        }).error(function (err) {
            console.log('error occured',err);
        });
    };

    return{
        bookings : addBooking
    }
});

app.controller('bookingRestaurant',['$scope','bookings', '$stateParams', function ($scope,bookings,$stateParams) {

    console.log('thissss',$stateParams.name,$stateParams.id);
    $scope.Rname = $stateParams.name.toUpperCase();
    $scope.confirmRestaurant = function () {
        var bookingInfo = {
            date : $scope.bookDate,
            time : $scope.bookTime,
            duration : $scope.bookDuration,
            mail_id : $scope.email_id,
            restaurant_id : $stateParams.id,
            restName : $stateParams.name
        };

        console.log(bookingInfo);
        bookings.bookings(bookingInfo).then(function (results) {
            console.log('is it this',results.data);
        });
    }
}]);