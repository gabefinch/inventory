admin.controller('InventoryCtrl',
[
  '$scope',
  'IngredientsFactory',
  'CategoriesFactory',
  function($scope, IngredientsFactory, CategoriesFactory){
    $scope.ingredients = IngredientsFactory.ingredients;
    $scope.category = function(ingredient) {
      return CategoriesFactory.find(ingredient.category_id) || {name: 'unknown'};
    };
    $scope.location = function(ingredient) {
      return LocationsFactory.find(ingredient.location_id) || {name:'unknown'}
    };


}]);
