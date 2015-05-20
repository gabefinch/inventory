potluck.controller('PrepIngCtrl',[
  '$scope',
  '$state',
  '$stateParams',
  'IngredientsFactory',
  'CategoriesFactory',
  'LocationsFactory',
  function($scope, $state, $stateParams, IngredientsFactory, CategoriesFactory, LocationsFactory){
    var ingredient = IngredientsFactory.find($stateParams.ingredientId);
    $scope.name = CategoriesFactory.find(ingredient.category_id).name;
    $scope.categoryFraction = function(){
      var category = CategoriesFactory.find(ingredient.category_id);
      var ings = IngredientsFactory.fromCategory(category);
      return " 1 of " + ings.length;
    };
    $scope.recievedMessage = function(){
      var created_at = new Date(ingredient.created_at);
      return "Arrived " + created_at.toLocaleDateString();
    };
    $scope.store = function(){
          if (ingredient.id) {
            IngredientsFactory.patchIngredient(ingredient)
            $state.go('recLocTop',{ ingredientId: ingredient.id });
          } else {
            IngredientsFactory.postIngredient(ingredient)
            .then(function(returned){
              $state.go('recLocTop',{ ingredientId: returned.id });
            });
          }
        };
    $scope.locationMessage = function(){
      var location = LocationsFactory.find(ingredient.location_id);
      if (location == null) {
        return "Location unknown";
      } else {
        return location.name;
      }
    };
    $scope.expireMessage = function() {
      var lifespan = CategoriesFactory.find(ingredient.category_id).lifespan;
      var shelftime =
      Math.floor((new Date().getTime() - ingredient.created_at)
      /(24 * 60 * 60 * 1000));
      if (shelftime > lifespan){return "Expired " + Math.abs(lifespan - shelftime) + " days ago";}
      else if (shelftime == lifespan){return "Expires today";}
      else if (shelftime < lifespan){return "Expires in " + (lifespan - shelftime) + " days.";}
    };
    $scope.use = function(){
      IngredientsFactory.removeIngredient(ingredient);
      $state.go('prep');
    };
    $scope.toBasket = function(){
      ingredient.basketed = true;
      $state.go('prep');
    };
    $scope.fromBasket = function(){
      ingredient.basketed = null;
      $state.go('prep');
    };
    if (ingredient.basketed) {
      $scope.basketed = true;
    } else {
      $scope.basketed = false;
    }
}]);
