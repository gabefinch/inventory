admin.controller('InventoryCtrl',
[
  '$scope',
  'IngredientsFactory',
  function($scope, IngredientsFactory){
    $scope.ingredients = IngredientsFactory.ingredients;


}]);
