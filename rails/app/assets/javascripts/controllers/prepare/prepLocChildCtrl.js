potluck.controller('PrepLocChildCtrl',
[
  '$scope',
  '$stateParams',
  'IngredientsFactory',
  'CategoriesFactory',
  'LocationsFactory',
  function($scope, $stateParams, IngredientsFactory, CategoriesFactory, LocationsFactory){
    $scope.currentLocation = LocationsFactory.find($stateParams.locationId);

    $scope.breadcrumbs = LocationsFactory.breadcrumbs($scope.currentLocation);

    $scope.ingredients = IngredientsFactory.ingredients;

    $scope.ingredientsBelow = function(location) {
      return IngredientsFactory.belowLocation(location).length;
    }

    $scope.catIdToName = function(category_id){
      return CategoriesFactory.find(category_id).name;
    };

    $scope.locIdToName = function(location_id){
      return LocationsFactory.find(location_id).name;
    };

}]);
