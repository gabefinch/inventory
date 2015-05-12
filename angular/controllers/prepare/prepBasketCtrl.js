potluck.controller('PrepBasketCtrl',
[
  '$scope',
  '$state',
  '$cacheFactory',
  'UtilitiesFactory',
  'IngredientsFactory',
  function($scope, $state, $cacheFactory, UtilitiesFactory, IngredientsFactory){
    var cache = $cacheFactory.get('potluck');
    var ingredients = cache.get('ingredients');
    $scope.basket = function(){
      var basket = [];
      for(var i = 0; i < ingredients.length; i++)
        {if(ingredients[i].basketed == true){basket.push(ingredients[i]);}
      }
      return basket;
    };

    var catIdToCat = function(category_id){
      return UtilitiesFactory.findById(cache.get('categories'),category_id);
    };
    $scope.categoryName = function(ingredient){
      var category = catIdToCat(ingredient.category_id);
      return category.name;
    };
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
          IngredientsFactory.removeIngredient(ingredients[i]);
        }
      }
      $state.go('prep');
    };
}]);
