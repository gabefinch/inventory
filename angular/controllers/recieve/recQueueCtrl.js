potluck.controller('RecQueueCtrl',
[
  '$scope',
  'IngredientsFactory',
  'CategoriesFactory',
  function($scope, IngredientsFactory, CategoriesFactory){

    $scope.ingredients = IngredientsFactory.ingredients;

    $scope.queueCount = function() {
      var count = 0;
      for (var i=0; i<=$scope.ingredients.length-1; i++) {
        if ($scope.ingredients[i].location_id == null) {count += 1;}
      }
      return count;
    };

    $scope.name = function(ingredient){
      return CategoriesFactory.find(ingredient.category_id).name;
    };

}]);
