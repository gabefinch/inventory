admin.controller('CategoriesCtrl',
[
  '$scope',
  'CategoriesFactory',
  function($scope, CategoriesFactory){

    $scope.categories = CategoriesFactory.categories;

    $scope.deleteCategory = function(object) {
      if (confirm("Are you sure? This will delete all sub-categories, as well as all ingredients that belong to these categories.")) {
        var catId = object.$parent.$modelValue.id;
        CategoriesFactory.erase(catId);
      }
    };

    $scope.test = function() {
      $scope.categories.push({name:"blahblah", parent_id: null});
    };

}]);
