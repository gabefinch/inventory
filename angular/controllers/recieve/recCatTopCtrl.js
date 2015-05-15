potluck.controller('RecCatTopCtrl',
[
  '$scope',
  '$cacheFactory',
  'UtilitiesFactory',
  function($scope, $cacheFactory, UtilitiesFactory){

    var cache = $cacheFactory.get('potluck');

    $scope.currentNode = {
      name: 'Categories',
      children: cache.get('categories')
    };

    $scope.ingredients = cache.get('ingredients')

    $scope.flatBranchIds = UtilitiesFactory.flatBranchIds;
    $scope.countFromIds = UtilitiesFactory.categoryCountFromIds;

    $scope.pathBack = 'recieve';

}]);
