potluck.factory('IngredientsFactory', function($http, $cacheFactory){
	var factory = {};
	var cache = $cacheFactory.get('potluck');

	factory.postIngredient = function(category_id, location_id){
		$http.post('http://localhost:3000/api/ingredients', {
            "category_id": category_id,
            "location_id": location_id
        }).
	  success(function(data) {
	    var ingredients = cache.get('ingredients');
			ingredients.push(data);
			cache.put('ingredients',ingredients);
	  }).
	  error(function(status) {
			console.log('エラー');
			console.log(status);
	  });
	};


	return factory;
});
