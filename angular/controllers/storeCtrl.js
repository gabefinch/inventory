potluck.controller('StoreCtrl',
	function($scope, $cacheFactory,$stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

    // the category doesn't seem to be found correctly by the below call...?
		var categoryNode = UtilitiesFactory.findById(cache.get('categories'), $stateParams.categoryId)

	});
