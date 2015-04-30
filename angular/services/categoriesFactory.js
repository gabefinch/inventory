potluck.factory('CategoriesFactory', function($resource){
	return $resource('http://localhost:3000/api/categories');
	
});