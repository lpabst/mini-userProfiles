angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.thisAppIsBroken = "This angular app is working";

    $scope.getUsersScope = function(){
        $scope.users = mainService.getUsers();
    }

    $scope.getUsersScope();




   
});