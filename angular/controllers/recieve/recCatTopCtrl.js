potluck.controller('RecCatTopCtrl',
[
  '$scope',
  'IngredientsFactory',
  'CategoriesFactory',
  function($scope, IngredientsFactory, CategoriesFactory){
    $scope.currentCategory = {
      name: 'Categories',
      children: CategoriesFactory.categories
    };
    $scope.ingredients = IngredientsFactory.ingredients;

}]);
