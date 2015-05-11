potluck.controller('RecSaveCtrl',
	function($scope, $cacheFactory,$stateParams, $state, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.selectedCategory = UtilitiesFactory.findById(
			cache.get('categories'),
			$stateParams.categoryId);

		// if ($scope.selectedCategrory.parent_id == null){
		// 	$scope.pathBack = {'recCatTop'};
		// } else {
		// 	$scope.pathBack = {'recCatChild', categoryId: $scope.selectedCategory.parent_id};
		// }

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

	});
