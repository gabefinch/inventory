potluck.controller('StoreCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');
		$scope.ingredients = cache.get('ingredients');

		$scope.findCategory = function(category_id){
			return UtilitiesFactory.findById((cache.get('categories')), category_id);
		};


		$scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
		$scope.storeLater = IngredientsFactory.postIngredient;
		$scope.pathBack= 'recieve';

	});
