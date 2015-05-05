potluck.factory('IngredientsFactory', function($http, $cacheFactory, $q, UtilitiesFactory){
	var factory = {};
	var cache = $cacheFactory.get('potluck');

	factory.postIngredient = function(category_id, location_id){
		var dfr = $q.defer();

		$http.post('http://localhost:3000/api/ingredients', {
   
            "category_id": category_id,
            "location_id": location_id
        }).
	  success(function(data) {
	    var ingredients = cache.get('ingredients');
			ingredients.push(data);
			cache.put('ingredients',ingredients);	
			dfr.resolve(data);
	  }).
	  error(function(status) {
			console.log('エラー');
			console.log(status);
			dfr.reject();
	  });

	  return dfr.promise;
	};

	factory.patchIngredient = function(category_id, location_id, ingredient){
		$http.patch('http://localhost:3000/api/ingredients/' + ingredient.id, {
						"ingredient": { 
            "category_id": category_id,
            "location_id": location_id
						}
        }).
	  success(function() {
	  	var ingredients = cache.get('ingredients');
	  		for (var i = 0; i <= ingredients.length-1; i++) {
	  			var currentIngredient = ingredients[i]
	  					currentId = currentIngredient.id
	  				if (currentId == ingredient.id) {
	  					currentIngredient.location_id = location_id;
	  					currentIngredient.category_id = category_id;
	  				}
	  		}
	  		cache.put('ingredients', ingredients);
	  	
	  }).
	  error(function(status) {
			console.log('エラー');
			console.log(status);
	  });
	};


	return factory;
});
