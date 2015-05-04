potluck.controller('StoreCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');
		$scope.unstoredItems = cache.get('ingredients');

		$scope.findCategory = function(id){
			UtilitiesFactory.findById((cache.get('categories')), id);
		};
		console.log($scope.unstoredItems);
		debugger;

		$scope.categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId);

	});
