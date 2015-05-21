admin.controller('LocationsCtrl',
[
  '$scope',
  'LocationsFactory',
  function($scope, LocationsFactory){
    $scope.currentCategory = {
      name: 'Locations',
      children: LocationsFactory.locations
    };
  $scope.locations = LocationsFactory.locations;
}]);