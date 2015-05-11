potluck.controller('PrepLocChildCtrl',
[
	'$scope',
  '$cacheFactory',
  '$stateParams',
  'UtilitiesFactory',
	function($scope, $cacheFactory, $stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.currentNode = UtilitiesFactory.findById(cache.get('locations'), $stateParams.locationId);

		if ($scope.currentNode.parent_id == null){
			$scope.pathBack = 'prepLocTop';
		} else {
			$scope.pathBack = 'prepLocChild({categoryId: ' + $scope.currentNode.parent_id + '})';
		}

		$scope.ingredients = cache.get('ingredients');

		$scope.ingDescCount = function(category) {
			return UtilitiesFactory.locationCountFromIds(
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
