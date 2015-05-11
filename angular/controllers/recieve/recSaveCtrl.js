potluck.controller('RecSaveCtrl',
	function($scope, $cacheFactory,$stateParams, $state, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.selectedCategory = UtilitiesFactory.findById(
			cache.get('categories'),
			$stateParams.categoryId);

		$scope.categoryFraction = function(){
			var ings = UtilitiesFactory.findIngsByCat($scope.selectedCategory);
			return " 1 of " + (ings.length + 1);
		};

		$scope.storeNow = function(category_id){
			IngredientsFactory.postIngredient(category_id)
				.then(function(ingredient){
					$state.go(
						'recLocTop',
						{ ingredientId: ingredient.id }
					);
			});
		};

		$scope.storeLater = function(category_id){
			IngredientsFactory.postIngredient(category_id);
			$state.go('recCatTop');
		}

	});
