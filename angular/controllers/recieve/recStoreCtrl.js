potluck.controller('RecStoreCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');
		$scope.ingredients = cache.get('ingredients');

		$scope.findCategory = function(category_id){
			return UtilitiesFactory.findById((cache.get('categories')), category_id);
		};


		$scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
		$scope.storeLater = IngredientsFactory.postIngredient;

		$scope.queueCount = function() {
			var count = 0;
			for (var i=0; i<=$scope.ingredients.length-1; i++) {
				if ($scope.ingredients[i].location_id == null) {count += 1;}
			}
			return count;
		};

		$scope.pathBack= 'recieve';

	});
