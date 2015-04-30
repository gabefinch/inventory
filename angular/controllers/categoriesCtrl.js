potluck.controller('CategoriesCtrl',
	function($scope, $http, CategoriesFactory){

	  $http.get('http://localhost:3000/api/categories').
        success(function(data) {
            $scope.categories = data;
        });

		var categories = CategoriesFactory.query(function() {
    console.log(categories);
  });

});