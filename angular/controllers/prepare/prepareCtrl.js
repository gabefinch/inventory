potluck.controller('PrepareCtrl',
[
  '$scope',
  'IngredientsFactory',
  function($scope, IngredientsFactory){

    $scope.basket = IngredientsFactory.basket;

}]);
