/**
 * Created by vgopali on 16-10-2016.
 */

app.controller('indexcntrrler', ['$scope','Restaurants', function ($scope, Restaurants) {
    var vm = this;
    vm.restaurantsListReg = [];

    Restaurants.RestaurantsList().then(function (results) {
        console.log('is it this',results.data.restaurantList);
        vm.restaurantsListReg = results.data.restaurantList;
        Restaurants.saveRestaurantList(results.data.restaurantList);
    });
    
    vm.dashboard = function () {
        console.log('dashboard clicked');
        Restaurants.RestaurantsList().then(function (results) {
            console.log('is it this',results.data);
            vm.restaurantsListReg = results.data.restaurantList;
            Restaurants.saveRestaurantList(results.data.restaurantList);
            vm.search_query = "";
        });
    };

    vm.setRestaurantIndex = function(index){
        console.log(index);
        Restaurants.selectedRestaurantIndex(index);
        console.log(Restaurants.getSelectedRestaurantIndex());
    };

    vm.bookThis = function (bookRestaurant) {
        console.log(bookRestaurant);
        Restaurants.book(bookRestaurant).then(function (results) {
            console.log(results.data);
        })
    };
    
    vm.applyfilter = function () {
        var temp = [];
        angular.forEach(Restaurants.getStoredData(), function (items) {
            console.log(typeof(items.cuisines),items.cuisines);
            if(items.name.toLowerCase().match(vm.search_query.toLowerCase())){
                temp.push(items);
            }
            if(items.location.toLowerCase().match(vm.search_query.toLowerCase())){
                temp.push(items);
            }
            if($.inArray(vm.search_query, items.cuisines) != -1 || $.inArray((vm.search_query.charAt(0).toUpperCase()+vm.search_query.slice(1)), items.cuisines) != -1){
                temp.push(items);
            }
        });
        vm.restaurantsListReg="";
        vm.restaurantsListReg = temp;

    }
    
}]);