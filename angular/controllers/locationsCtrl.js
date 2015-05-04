potluck.controller('LocationsCtrl',
function($scope, $stateParams, $cacheFactory, UtilitiesFactory){
  var cache = $cacheFactory.get('potluck');
  $scope.locations = cache.get('locations');

 	$scope.findCategory = function(category_id){
		return UtilitiesFactory.findById((cache.get('categories')), category_id);
	};
	
  $scope.ingredientNode = UtilitiesFactory.findByIdArray(cache.get('ingredients'), $stateParams.ingredientId);
  $scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
  $scope.locationNode = UtilitiesFactory.findById(cache.get('locations'), $stateParams.locationId);
 
});