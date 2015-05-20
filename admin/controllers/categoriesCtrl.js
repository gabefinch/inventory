admin.controller('CategoriesCtrl',
[
  '$scope',
  'CategoriesFactory',
  function($scope, CategoriesFactory){
    $scope.currentCategory = {
      name: 'Categories',
      children: CategoriesFactory.categories
    };
  $scope.categories = CategoriesFactory.categories;
  $scope.ingredients = CategoriesFactory.ingredients;
}]);