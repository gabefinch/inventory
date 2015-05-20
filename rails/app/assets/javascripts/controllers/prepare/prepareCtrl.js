potluck.controller('PrepareCtrl',
[
  '$scope',
  'IngredientsFactory',
  function($scope, IngredientsFactory){

    $scope.basketSize = IngredientsFactory.basket().length;

}]);
