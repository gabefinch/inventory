admin.controller('InventoryCtrl',
[
  '$scope',
  'IngredientsFactory',
  'CategoriesFactory',
  'LocationsFactory',
  function($scope, IngredientsFactory, CategoriesFactory, LocationsFactory){
    $scope.ingredients = IngredientsFactory.ingredients;
    $scope.category = function(ingredient) {
      return CategoriesFactory.find(ingredient.category_id) || {name: 'Not Found'};
    };
    $scope.location = function(ingredient) {
      return LocationsFactory.find(ingredient.location_id) || {name:'-'}
    };
    $scope.niceDate = function(date) {
      return moment(date).format('ddd. MMM Do, YYYY');
    };


}]);
