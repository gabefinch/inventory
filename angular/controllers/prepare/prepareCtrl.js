potluck.controller('PrepareCtrl',[
	'$scope',
	'$cacheFactory',
	'$stateParams',
	'UtilitiesFactory',
	function($scope, $cacheFactory, $stateParams, UtilitiesFactory){

		var cache = $cacheFactory.get('potluck');

}]);
