potluck.controller('RecLocTopCtrl',
[
  '$scope',
  '$stateParams',
  'IngredientsFactory',
  'CategoriesFactory',
  'LocationsFactory',
  function($scope, $stateParams, IngredientsFactory, CategoriesFactory, LocationsFactory){
    $scope.ingredient = IngredientsFactory.find($stateParams.ingredientId);

    var created = new Date($scope.ingredient.created_at)
    $scope.created_at = (created.getMonth() + 1) + "/"
    + created.getDate() + "/" + created.getFullYear();

    $scope.category = CategoriesFactory.find($scope.ingredient.category_id);

    $scope.categoryFraction = function(){
      var ings = IngredientsFactory.fromCategory($scope.category);
      return " 1 of " + (ings.length);
    };

    $scope.currentLocation = {
      name: "Locations",
      children: LocationsFactory.locations
    };

    $scope.ingredientComposite = function(ingredient, location) {
      ingredient.location_id = location.id;
      return ingredient;
    };

}]);
