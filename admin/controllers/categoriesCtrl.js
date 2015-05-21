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

  $scope.deleteCategory = function(category) {
    var catId = category.$parent.$modelValue.id;
    console.log(catId)
    CategoriesFactory.erase(catId);
  };
  
}]);