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

  $scope.save = function() {
    CategoriesFactory.saveAll($scope.categories);
    };

  $scope.delete = function(category) {
    console.log(category);
    remove(category);
  };
  
}]);