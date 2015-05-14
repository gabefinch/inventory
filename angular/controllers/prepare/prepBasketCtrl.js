potluck.controller('PrepBasketCtrl',
[
  '$scope',
  '$state',
  'CategoriesFactory',
  'IngredientsFactory',
  function($scope, $state, CategoriesFactory, IngredientsFactory){


    var ingredients = IngredientsFactory.ingredients;

    $scope.basket = IngredientsFactory.basket();

    $scope.categoryName = function(ingredient){
      return CategoriesFactory.find(ingredient.category_id).name;
    }

    $scope.outOfBasket = function(ingredient){
      delete ingredient.basketed;
    };

    $scope.allOutOfBasket = function(){
      for(var i = 0; i < ingredients.length; i++){
        delete ingredients[i].basketed;
      }
      $state.go('prep');
    };

    $scope.allUseBasket = function(){
      for(var i = 0; i < ingredients.length; i++){
        if(ingredients[i].basketed == true){
          delete ingredients[i].basketed;
          IngredientsFactory.removeIngredient(ingredients[i]);
        }
      }
      $state.go('prep');
    };

}]);
