potluck.controller('PrepIngCtrl',[
	'$scope',
  '$cacheFactory',
	'$state',
  '$stateParams',
  'UtilitiesFactory',
	'IngredientsFactory',
	function($scope, $cacheFactory, $state, $stateParams, UtilitiesFactory, IngredientsFactory){
		var cache = $cacheFactory.get('potluck');
		$scope.ingredient = UtilitiesFactory.findByIdArray(cache.get('ingredients'), $stateParams.ingredientId);
		$scope.ingredients = cache.get('ingredients');
		var catIdToCat = function(category_id){
			return UtilitiesFactory.findById(cache.get('categories'),category_id);
		};
		$scope.categoryName = function(ingredient){
			var category = catIdToCat(ingredient.category_id);
			return category.name;
		};
		$scope.categoryFraction = function(ingredient){
			var category = catIdToCat(ingredient.category_id);
			var ings = UtilitiesFactory.findIngsByCat(category);
			return " 1 of " + ings.length;
		};
		$scope.recievedMessage = function(ingredient){
			var created_at = new Date(ingredient.created_at);
			return "Arrived " + created_at.toLocaleDateString();
		};
		$scope.locationMessage = function(ingredient){
			var location = UtilitiesFactory.findById(
				cache.get('locations'),
				ingredient.location_id);
			if (location == null) {return "Location unknown";}
			else {return location.name;}
		};
		$scope.expireMessage = function(ingredient) {
			var lifespan = catIdToCat(ingredient.category_id).lifespan;
			var shelftime =
			Math.floor((new Date().getTime() - ingredient.created_at)
			/(24 * 60 * 60 * 1000));
			if (shelftime > lifespan){return "Expired " + Math.abs(lifespan - shelftime) + " days ago";}
			else if (shelftime == lifespan){return "Expires today";}
			else if (shelftime < lifespan){return "Expires in " + (lifespan - shelftime) + " days.";}
		};

		$scope.use = function(ingredient){
			IngredientsFactory.removeIngredient(ingredient);
			$state.go('prep');
		};

		$scope.toBasket = function(ingredient){
			ingredient.basketed = true;
			$state.go('prep');
		};

		$scope.fromBasket = function(ingredient){
			ingredient.basketed = null;
			$state.go('prep');
		};

}]);
