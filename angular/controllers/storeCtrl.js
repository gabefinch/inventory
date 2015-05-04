potluck.controller('StoreCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
		$scope.storeLater = IngredientsFactory.postIngredient;
	});
