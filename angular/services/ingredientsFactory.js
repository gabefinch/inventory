potluck.factory('IngredientsFactory',
  ['$http','$cacheFactory', '$q', 'UtilitiesFactory',
    function($http, $cacheFactory, $q, UtilitiesFactory){
      var factory = {};
      var cache = $cacheFactory.get('potluck');

      factory.postIngredient = function(category_id, location_id){
        var defer = $q.defer();
        $http.post('http://localhost:3000/api/ingredients', {
          "category_id": category_id,
           "location_id": location_id
        }).
        success(function(data) {
          var ingredients = cache.get('ingredients');
          ingredients.push(data);
          cache.put('ingredients',ingredients);
          defer.resolve(data);
        }).
        error(function(status) {
          console.log('エラー');
          console.log(status);
          defer.reject(status);
        });
        return defer.promise;
      };

      factory.patchIngredient = function(ingredient){
        $http.patch(
          'http://localhost:3000/api/ingredients/' + ingredient.id,
           {"ingredient": ingredient})
          .success(function() {
            var ingredients = cache.get('ingredients');
            var foundIng = UtilitiesFactory.findByIdArray(ingredients, ingredient.id);
            foundIng.location_id = ingredient.location_id;
            foundIng.category_id = ingredient.category_id;
            cache.put('ingredients', ingredients);
        }).
        error(function(status) {
          console.log('エラー');
          console.log(status);
        });
      };

      factory.removeIngredient = function(ingredient){
        $http.delete(
          'http://localhost:3000/api/ingredients/' + ingredient.id,
           {"ingredient": ingredient})
          .success(function() {
            var ingredients = cache.get('ingredients');
            for(var i = 0; i < ingredients.length; i++) {
              if(ingredients[i].id == ingredient.id){ingredients.splice(i,1);}
            }
            cache.put('ingredients', ingredients);
        }).
        error(function(status) {
          console.log('エラー');
          console.log(status);
        });
      };

      return factory;
  }]
);
