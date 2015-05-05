potluck.controller('RecieveCtrl',
	function($scope, $cacheFactory){

    var cache = $cacheFactory.get('potluck');

		var ingredients = cache.get('ingredients');

    $scope.queueCount = function() {
			var count = 0;
			for (var i=0; i<=ingredients.length-1; i++) {
				if (ingredients[i].location_id == null) {count += 1;}
			}
			return count;
		};

});
