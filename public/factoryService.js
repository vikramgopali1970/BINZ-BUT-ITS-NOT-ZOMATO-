/**
 * Created by vgopali on 19-10-2016.
 */
var app = angular.module('myApp', [
    'ui.router',
    'xeditable'
]);

app.run(function(editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});

app.factory('Restaurants',function ($http) {
    var allRestaurants = [];
    var RestaurantIndex = -1;
    var allBookings = [];


    var saveRestaurantList = function (restos) {
        allRestaurants = restos;
    };

    var saveBookingsList = function (bookings) {
        allBookings = bookings;
    };

    var getRestaurantSelectedspecific = function () {
        return allRestaurants[RestaurantIndex];
    };

    var getRestaurantSelected = function () {
        return allRestaurants;
    };

     var getBookingsList = function () {
        return allBookings;
    };

    var saveRestaurantIndex= function (index) {
        RestaurantIndex = index;
    };

    var getRestaurantIndex= function () {
        return RestaurantIndex;
    };

    var getallBookingLists = function () {
        return $http.get('/bookingRestaurants/getAllBooking').success(function (data, status) {
            console.log(status);
        }).error(function (error) {
            console.log('error',error);
        });
    }

    var getBookingList = function(){
        return $http.get('/bookingRestaurants/getBooking', {params: {bookDetails:allRestaurants[RestaurantIndex]}}).success(function (data, status) {
            console.log(status);
        }).error(function (error) {
            console.log('error',error);
        });
    };

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
    };

    var removeRestaurant = function () {
        return $http.post('/restaurant/delete', allRestaurants[RestaurantIndex]).success(function (data,status) {
            console.log(status);
        }).error(function (err) {
            console.log('error occured',err);
        });
    };

    var cancelBooking = function (RestaurantObj) {
        return $http.post('/bookingRestaurants/deleteThisBooking', RestaurantObj).success(function (data,status) {
            console.log(status);
        }).error(function (err) {
            console.log('error occured',err);
        });
    };

    var updateRestaurant = function (table,capacity) {
        console.log('before ',allRestaurants[RestaurantIndex].capacity, allRestaurants[RestaurantIndex].tables);
        allRestaurants[RestaurantIndex].tables = table;
        allRestaurants[RestaurantIndex].capacity = capacity;
        console.log('updated ',allRestaurants[RestaurantIndex].capacity, allRestaurants[RestaurantIndex].tables);
        return $http.post('/restaurant/update', allRestaurants[RestaurantIndex]).success(function (data,status) {
            console.log(status);
        }).error(function (err) {
            console.log('error occured',err);
        });
    };

    var addThis = function (addDetails) {
        return $http.post('/addRestaurant',addDetails).success(function (data,status) {
            console.log(status);
        }).error(function (err) {
            console.log('error occured',err);
        });
    };

    return {
        RestaurantsList : getRestaurantsList,
        book : bookThis,
        addRestaurant : addThis,
        saveRestaurantList: saveRestaurantList,
        getRestaurantSelected: getRestaurantSelectedspecific,
        selectedRestaurantIndex: saveRestaurantIndex,
        getSelectedRestaurantIndex: getRestaurantIndex,
        removeRestaurant: removeRestaurant,
        updateRestaurant: updateRestaurant,
        getBookingList: getBookingList,
        getCustomersBooking: getallBookingLists,
        getAllBokingsData: saveBookingsList,
        showAllBookingData: getBookingsList,
        cancelThisBooking: cancelBooking,
        getStoredData:getRestaurantSelected
    }
});

