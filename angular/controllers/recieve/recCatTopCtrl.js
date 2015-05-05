potluck.controller('RecCatTopCtrl',
	function($scope, $cacheFactory, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.currentNode = {
			name: 'Categories',
			children: cache.get('categories')
		};

		$scope.ingredients = cache.get('ingredients')

		$scope.selfAndDescendantsIds = UtilitiesFactory.selfAndDescendantsIds;
		$scope.countFromIds = UtilitiesFactory.categoryCountFromIds;

	}
);
