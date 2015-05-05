potluck.controller('PrepLocTopCtrl',[
  '$scope',
  '$cacheFactory',
  'UtilitiesFactory',
	function($scope, $cacheFactory, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.pathBack= 'prep';

		$scope.currentNode = {
			name: 'Locations',
			children: cache.get('locations')
		};

		$scope.ingDescCount = function(location) {
			return UtilitiesFactory.locationCountFromIds(
				cache.get('ingredients'),
				UtilitiesFactory.selfAndDescendantsIds(location));
		}

		$scope.catIdToName = function(id){
			return UtilitiesFactory.findById(cache.get('categories'),id).name;
		};

		$scope.locIdToName = function(id){
			return UtilitiesFactory.findById(cache.get('locations'),id).name;
		};

		$scope.ingredients = cache.get('ingredients');
	}
]);
