potluck.controller('LocationCtrl',
function($scope, $http){

  $scope.test = "Hello";

  $http.get('http://localhost:3000/api/locations').
        success(function(data) {
            $scope.locations = data;
        });

});
