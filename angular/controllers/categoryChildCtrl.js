potluck.controller('CategoryChildCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');
		var node = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId)
		$scope.currentNodeName = node.name
		$scope.childNodes = node.children;
		console.log($scope.childNodes);

	});
