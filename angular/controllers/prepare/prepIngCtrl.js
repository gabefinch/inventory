potluck.controller('PrepIngCtrl',[
	'$scope',
  '$cacheFactory',
  '$stateParams',
  'UtilitiesFactory',
	function($scope, $cacheFactory, $stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.ingredient = UtilitiesFactory.findByIdArray(cache.get('ingredients'), $stateParams.ingredientId);

		$scope.ingredients = cache.get('ingredients');


		$scope.catIdToCat = function(category_id){
			return UtilitiesFactory.findById(cache.get('categories'),category_id);
		};

		$scope.locIdToLoc = function(location_id){
			return UtilitiesFactory.findById(cache.get('locations'),location_id);
		};

  }
]);
