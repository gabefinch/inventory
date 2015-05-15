potluck.controller('RecCatChildCtrl',
[
  '$scope',
  '$stateParams',
  'IngredientsFactory',
  'CategoriesFactory',
  function($scope, $stateParams, IngredientsFactory, CategoriesFactory){
    $scope.currentCategory = CategoriesFactory.find($stateParams.categoryId);

    $scope.breadcrumbs = CategoriesFactory.breadcrumbs($scope.currentCategory);

    $scope.ingredients = IngredientsFactory.ingredients;
}]);
