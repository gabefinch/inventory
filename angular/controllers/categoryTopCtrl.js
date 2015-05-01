potluck.controller('CategoryTopCtrl',
	function($scope, $cacheFactory){

		var cache = $cacheFactory.get('potluck');

		$scope.currentNode = {
			name: 'Categories',
			children: cache.get('categories')
		};
	}
);
