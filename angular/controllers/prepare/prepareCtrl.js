potluck.controller('PrepareCtrl',
[
	'$scope',
	'$cacheFactory',
	function($scope, $cacheFactory){
		var cache = $cacheFactory.get('potluck');
		var ingredients = cache.get('ingredients');
		$scope.basketCount = function() {
			var count = 0;
			for (var i = 0; i < ingredients.length; i++){
				if(ingredients[i].basketed == true){
					count+=1;
				}
			}
			return count;
		};
}]);
