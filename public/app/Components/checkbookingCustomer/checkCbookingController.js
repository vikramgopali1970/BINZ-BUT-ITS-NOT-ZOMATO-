/**
 * Created by vgopali on 19-10-2016.
 */


app.controller('viewCustBookings', ['$scope', 'Restaurants', function ($scope,Restaurants) {
    
   var bookingsList = [];
    $scope.dispBookings= [];
    
    Restaurants.getCustomersBooking().then(function (results) {
        Restaurants.getAllBokingsData(results.data.result);
        bookingsList  = results.data.result;
    });

    $scope.submit = function () {
        console.log(bookingsList.filter(function(obj){return obj.custEmail == $scope.srchEmail}));
        $scope.dispBookings = bookingsList.filter(function(obj){return obj.custEmail == $scope.srchEmail});
    }

    $scope.cancelThis  = function (objBook) {
        console.log(objBook);
        Restaurants.cancelThisBooking(objBook).then(function (results) {
            console.log(results.data);
        })
    }
}]);