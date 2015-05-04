potluck.controller('StoreCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');
		$scope.unstoredItems = cache.get('ingredients');

		$scope.findCategory = function(id){
			UtilitiesFactory.findById((cache.get('categories')), id);
		};
		console.log($scope.unstoredItems);

		$scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
		$scope.storeLater = IngredientsFactory.postIngredient;
	});
