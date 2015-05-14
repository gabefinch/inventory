potluck.controller('PrepBasketCtrl',
[
  '$scope',
  '$state',
  'CategoriesFactory',
  'IngredientsFactory',
  function($scope, $state, CategoriesFactory, IngredientsFactory){

    $scope.basket = IngredientsFactory.basket();

    $scope.categoryName = function(ingredient){
      return CategoriesFactory.find(ingredient.category_id).name;
    }

    $scope.basketRemove = function(ingredient){
      delete ingredient.basketed;
    };

    $scope.basketUseAll = function(){
      IngredientsFactory.basketUseAll();
      $state.go('prep');
    };

    $scope.basketRemoveAll = function(){
      IngredientsFactory.basketRemoveAll();
      $state.go('prep');
    };

}]);
