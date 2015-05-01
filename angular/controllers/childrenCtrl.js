potluck.controller('ChildrenCtrl',
	function($scope, EverythingFactory, UtilitiesFactory, $stateParams){

		$scope.everything = EverythingFactory;
		$scope.headerCategory = UtilitiesFactory.findById(EverythingFactory.categories, $stateParams.categoryId)
		$scope.categories = EverythingFactory.categories;


		console.log($scope.headerCategory.id);
	});