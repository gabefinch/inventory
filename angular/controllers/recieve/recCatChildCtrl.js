potluck.controller('RecCatChildCtrl',
[
  '$scope',
  '$cacheFactory',
  '$stateParams',
  'UtilitiesFactory',
  function($scope, $cacheFactory, $stateParams, UtilitiesFactory){

    var cache = $cacheFactory.get('potluck');

    $scope.currentNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);

    if ($scope.currentNode.parent_id == null){
      $scope.pathBack = 'recCatTop';
    } else {
      $scope.pathBack = 'recCatChild({categoryId: ' + $scope.currentNode.parent_id + '})';
    }

    $scope.ingredients = cache.get('ingredients')

    $scope.selfAndDescendantsIds = UtilitiesFactory.selfAndDescendantsIds;
    $scope.countFromIds = UtilitiesFactory.categoryCountFromIds;
}]);
