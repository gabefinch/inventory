potluck.controller('PrepCatTopCtrl',
	function($scope, $cacheFactory, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.pathBack= 'prep';

		$scope.currentNode = {
			name: 'Categories',
			children: cache.get('categories')
		};

		$scope.ingDescCount = function(category) {
			return UtilitiesFactory.categoryCountFromIds(
				cache.get('ingredients'),
				UtilitiesFactory.selfAndDescendantsIds(category));
		}

		$scope.catIdToName = function(id){
			return UtilitiesFactory.findById(cache.get('categories'),id).name;
		};

		$scope.locIdToName = function(id){
			return UtilitiesFactory.findById(cache.get('locations'),id).name;
		};

		$scope.ingredients = cache.get('ingredients');
	}
);
