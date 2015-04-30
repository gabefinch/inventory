potluck.controller('ChildrenCtrl',
	function($scope, EverythingFactory, UtilitiesFactory, $stateParams){

		$scope.everything = EverythingFactory;
		$scope.mainCategory = UtilitiesFactory.findById(EverythingFactory.categories, $stateParams.categoryId)
		$scope.categories = EverythingFactory.categories;

	});