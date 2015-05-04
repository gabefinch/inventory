potluck.controller('IngredientCtrl',
function($scope, $stateParams, $cacheFactory, UtilitiesFactory, IngredientsFactory){
  var cache = $cacheFactory.get('potluck');

  $scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
  $scope.locationNode = UtilitiesFactory.findById(cache.get('locations'), $stateParams.locationId);
  $scope.saveIngredient = IngredientsFactory.postIngredient;
});
