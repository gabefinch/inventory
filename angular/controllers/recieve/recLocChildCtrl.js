potluck.controller('RecLocChildCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');
		$scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
		$scope.locationNode = UtilitiesFactory.findById(cache.get('locations'), $stateParams.locationId);

		$scope.childNodes = locationNode.children;
		console.log($scope.childNodes);

	});
