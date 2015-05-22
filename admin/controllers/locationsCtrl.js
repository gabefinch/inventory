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

  $scope.deleteLocation = function(object) {
      if (confirm("Are you sure? This will delete all sub-categories, as well as all ingredients that belong to these categories.")) {
        var locId = object.$parent.$modelValue.id;
        LocationsFactory.erase(locId);
      }
    };
}]);