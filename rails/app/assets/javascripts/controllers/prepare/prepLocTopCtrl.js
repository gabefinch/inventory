potluck.controller('PrepLocTopCtrl',
[
  '$scope',
  'IngredientsFactory',
  'CategoriesFactory',
  'LocationsFactory',
  function($scope, IngredientsFactory, CategoriesFactory, LocationsFactory){
    $scope.currentLocation = {
      name: 'Locations',
      children: LocationsFactory.locations
    };

    $scope.ingredientsBelow = function(location) {
      return IngredientsFactory.belowLocation(location).length;
    }

    $scope.catIdToName = function(id){
      return CategoriesFactory.find(id).name;
    };

    $scope.locIdToName = function(id){
      return LocationsFactory.find(id).name;
    };

    $scope.ingredients = IngredientsFactory.ingredients;

}]);
