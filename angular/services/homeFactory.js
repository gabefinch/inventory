potluck.factory('HomeFactory', function($http, $cacheFactory){
	var factory = {};
	var cache = $cacheFactory('potluck');
	factory.reloadCache =
		$http.get('http://localhost:3000/api/everything').
		  success(function(data) {
		    cache.put('categories', data.categories);
		    cache.put('locations', data.locations);
		    cache.put('ingredients', data.ingredients);
		  }).
		  error(function(status) {
				console.log('エラー', err);
	  });
	return factory;
});
