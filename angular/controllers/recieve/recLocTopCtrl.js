potluck.controller('RecLocTopCtrl',
function($scope, $stateParams, $cacheFactory, UtilitiesFactory){

  var cache = $cacheFactory.get('potluck');

  $scope.ingredient = UtilitiesFactory.findByIdArray(
    cache.get('ingredients'),
    $stateParams.ingredientId);

  var created = new Date($scope.ingredient.created_at)
  $scope.created_at = (created.getMonth() + 1) + "/" + created.getDate() + "/" + created.getFullYear();


 	$scope.category = UtilitiesFactory.findById(
     cache.get('categories'),
     $scope.ingredient.category_id);

  $scope.categoryFraction = function(){
    var ings = UtilitiesFactory.findIngsByCat($scope.category);
    return " 1 of " + (ings.length);
  };

  $scope.locationNode = {
    name: "Locations",
    children: cache.get('locations')};
});
