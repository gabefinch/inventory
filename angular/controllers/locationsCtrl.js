potluck.controller('LocationsCtrl',
function($scope, $stateParams, $cacheFactory, UtilitiesFactory){
  var cache = $cacheFactory.get('potluck');
  $scope.selectedCategory = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
  $scope.locations = cache.get('locations');

  // Hello!! for some reason the two things below are throwing TypeError: Cannot read property 'length' of undefined errors

  // $scope.headerCategory = UtilitiesFactory.findById(EverythingFactory.children, $stateParams.categoryId)

  // $scope.mainLocation = UtilitiesFactory.findById($scope.locations, $stateParams.locationId)

  console.log($scope.locations.id)
  console.log($scope.locations)
  console.log($scope.mainLocation)
});
