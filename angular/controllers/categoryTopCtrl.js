potluck.controller('CategoryTopCtrl',
	function($scope, $cacheFactory){
		var cache = $cacheFactory.get('potluck');
		$scope.currentNodeName = 'Categories'
		$scope.childNodes = cache.get('categories');
		console.log($scope.childNodes);
	}
);
