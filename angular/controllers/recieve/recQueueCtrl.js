potluck.controller('RecSaveCtrl',
	function($scope, $cacheFactory,$stateParams, $state, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.categoryNode = UtilitiesFactory.findById(
			cache.get('categories'),
			$stateParams.categoryId);

		$scope.storeNow = function(category_id){
			IngredientsFactory.postIngredient(category_id)
				.then(function(ingredient){
					$state.go(
						'ingredientLocation',
						{ ingredientId: ingredient.id }
					);
			});
		};

		$scope.storeLater = function(category_id){
			IngredientsFactory.postIngredient(category_id);
			$state.go('recCatTop');
		}

		$scope.queueCount = function() {
			var count = 0;
			for (var i=0; i<=$scope.ingredients.length-1; i++) {
				if ($scope.ingredients[i].location_id == null) {count += 1;}
			}
			return count;
		};

		$scope.pathBack= 'recieve';

		$scope.ingredients = cache.get('ingredients');
		$scope.ingredientNode = UtilitiesFactory.findByIdArray(cache.get('ingredients'), $stateParams.ingredientId);

		$scope.findCategory = function(category_id){
			return UtilitiesFactory.findById((cache.get('categories')), category_id);
		};

	});
