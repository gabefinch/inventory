potluck.controller('EverythingCtrl',
	function($scope, EverythingFactory){

		$scope.everything = EverythingFactory;
		$scope.categories = EverythingFactory.categories;
		


	});