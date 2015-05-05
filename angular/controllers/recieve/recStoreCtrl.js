potluck.controller('RecStoreCtrl',
	function($scope, $cacheFactory,$stateParams, $state, UtilitiesFactory, IngredientsFactory){

		var cache = $cacheFactory.get('potluck');
		$scope.ingredients = cache.get('ingredients');
		$scope.ingredientNode = UtilitiesFactory.findByIdArray(cache.get('ingredients'), $stateParams.ingredientId); 

		$scope.findCategory = function(category_id){
			return UtilitiesFactory.findById((cache.get('categories')), category_id);
		};


		$scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);
		
		$scope.storeNow = function(category_id){
			IngredientsFactory.postIngredient(category_id).then(function(payload){
				$scope.ingredient = payload;
		
				$state.go('ingredientLocation',{ ingredientId: $scope.ingredient.id });
			});
		};

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
