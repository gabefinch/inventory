potluck.controller('RecSaveCtrl',[
	'$scope',
  '$cacheFactory',
	'$state',
  '$stateParams',
  'UtilitiesFactory',
  'IngredientsFactory',
	function($scope, $cacheFactory, $state, $stateParams, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.selectedCategory = UtilitiesFactory.findById(
			cache.get('categories'),
			$stateParams.categoryId);

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


		$scope.recievedMessage = function(category){
			var created_at = new Date(category.created_at);
			return "Arrived " + created_at.toLocaleDateString();
		};

	}
	]);
