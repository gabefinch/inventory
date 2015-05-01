potluck.controller('StoreCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.categoryNode = UtilitiesFactory.findById(
			cache.get('categories'),
			$stateParams.categoryId
		);

	});
