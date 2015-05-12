potluck.controller('PrepBasketCtrl',
[
	'$scope',
  '$cacheFactory',
  'UtilitiesFactory',
	'IngredientsFactory',
	function($scope, $cacheFactory, UtilitiesFactory, IngredientsFactory){
		var cache = $cacheFactory.get('potluck');
		var ingredients = cache.get('ingredients');
		$scope.basket = function(){
			var basket = [];
			for(var i = 0; i < ingredients.length; i++)
				{if(ingredients[i].basketed == true){basket.push(ingredients[i]);}
			}
			return basket;
		};

		var catIdToCat = function(category_id){
			return UtilitiesFactory.findById(cache.get('categories'),category_id);
		};
		$scope.categoryName = function(ingredient){
			var category = catIdToCat(ingredient.category_id);
			return category.name;
		};
		$scope.fromBasket = function(ingredient){
			ingredient.basketed = null;
		};
		$scope.dumpBasket = function(){
			for(var i = 0; i < ingredients.length; i++){ingredients[i].basketed = null;}
		};
}]);
