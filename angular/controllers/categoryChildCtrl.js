potluck.controller('CategoryChildCtrl',
	function($scope, $cacheFactory, $stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.currentNode = UtilitiesFactory.findById(
			cache.get('categories'),
			$stateParams.categoryId
		);


		$scope.ingredients = cache.get('ingredients')

		$scope.selfAndDescendantsIds = UtilitiesFactory.selfAndDescendantsIds;
		$scope.countFromIds = UtilitiesFactory.categoryCountFromIds;

		console.log($scope.currentNode);

	});
