/**
 * Created by vgopali on 18-10-2016.
 */


app.controller('addRestaurant',['$scope','Restaurants', function ($scope,Restaurants) {

    //console.log('thissss',$stateParams.name,$stateParams.id);
    console.log('log this',Restaurants);
    $scope.addNewRestaurant = function () {
        var addRestInfo = {
            name : $scope.rName,
            location : $scope.rLoc,
            contact_num : $scope.rNum,
            tables : $scope.rTableNum,
            cost : $scope.rCost,
            capacity : $scope.rTableCapacity,
            cuisines : $scope.rCuisines,
            img_src : $scope.rImg
        };

        console.log(addRestInfo);
        Restaurants.addRestaurant(addRestInfo).then(function (results) {
            console.log('is it this',results.data);
        });
    }
}]);
