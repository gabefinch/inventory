potluck.controller('PrepCatChildCtrl',
[
  '$scope',
  '$cacheFactory',
  '$stateParams',
  'UtilitiesFactory',
  function($scope, $cacheFactory, $stateParams, UtilitiesFactory){

    var cache = $cacheFactory.get('potluck');

    $scope.currentNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);

    if ($scope.currentNode.parent_id == null){
      $scope.pathBack = 'prepCatTop';
    } else {
      $scope.pathBack = 'prepCatChild({categoryId: ' + $scope.currentNode.parent_id + '})';
    }

    $scope.ingredients = cache.get('ingredients');

    $scope.ingDescCount = function(category) {
      return UtilitiesFactory.categoryCountFromIds(
        cache.get('ingredients'),
        UtilitiesFactory.selfAndDescendantsIds(category));
    }

    $scope.catIdToName = function(category_id){
      return UtilitiesFactory.findById(cache.get('categories'),category_id).name;
    };

    $scope.locIdToName = function(location_id){
      return UtilitiesFactory.findById(cache.get('locations'),location_id).name;
    };

}]);
