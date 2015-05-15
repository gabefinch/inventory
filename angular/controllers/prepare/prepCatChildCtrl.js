potluck.controller('PrepCatChildCtrl',
[
  '$scope',
  '$stateParams',
  'IngredientsFactory',
  'CategoriesFactory',
  'LocationsFactory',
  function($scope, $stateParams, IngredientsFactory, CategoriesFactory, LocationsFactory){
    $scope.currentCategory = CategoriesFactory.find($stateParams.categoryId);

    $scope.breadcrumbs = CategoriesFactory.breadcrumbs($scope.currentCategory);

    $scope.ingredients = IngredientsFactory.ingredients;

    $scope.ingredientsBelow = function(category) {
      return IngredientsFactory.belowCategory(category).length;
    }

    $scope.catIdToName = function(category_id){
      return CategoriesFactory.find(category_id).name;
    };

    $scope.locIdToName = function(location_id){
      return LocationsFactory.find(location_id).name;
    };

}]);
