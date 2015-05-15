potluck.controller('PrepCatTopCtrl',
[
  '$scope',
  'IngredientsFactory',
  'CategoriesFactory',
  'LocationsFactory',
  function($scope, IngredientsFactory, CategoriesFactory, LocationsFactory){
    $scope.currentCategory = {name: 'Categories', children: CategoriesFactory.categories}

    $scope.ingredientsBelow = function(category) {
      return IngredientsFactory.belowCategory(category).length;
    }

    $scope.catIdToName = function(id){
      return CategoriesFactory.find(id).name;
    };

    $scope.locIdToName = function(id){
      return LocationsFactory.find(id).name;
    };

    $scope.ingredients = IngredientsFactory.ingredients;

}]);
