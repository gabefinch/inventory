potluck.controller('HomeCtrl',
[
  '$scope',
  '$cacheFactory',
  'HomeFactory',
  function($scope, $cacheFactory, HomeFactory){
    HomeFactory.reloadCache;
}]);
