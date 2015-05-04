potluck.controller('CategoryChildCtrl',
	function($scope, $cacheFactory, $stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.currentNode = UtilitiesFactory.findById(
			cache.get('categories'),
			$stateParams.categoryId
		);
		console.log($scope.currentNode);
		console.log(cache);
		console.log("hello");

		$scope.ingredients = cache.get('ingredients')

		$scope.selfAndDescendantsIds = UtilitiesFactory.selfAndDescendantsIds;
		$scope.countFromIds = UtilitiesFactory.categoryCountFromIds;

	});
