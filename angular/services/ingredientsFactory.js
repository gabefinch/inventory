;(function() {
    'use strict';

    angular
      .module('potluck')
      .factory('IngredientsFactory', IngredientsFactory);

    IngredientsFactory.$inject = ['$http','$cacheFactory', '$q', 'UtilitiesFactory'];

    function IngredientsFactory($http, $cacheFactory, $q, UtilitiesFactory){
        var cache = $cacheFactory.get('potluck');

        var factory = {
          ingredients: ingredients
          find: find,
          postIngredient: postIngredient,
          patchIngredient: patchIngredient,
          removeIngredient: removeIngredient
        };
        
        return factory;

        var ingredients = cache.get('ingredients');

        function find(id) {
          for (var i = 0; i < ingredients.length; i++) {
            if (ingredients[i].id == id)
              {return ingredients[i];}
          }
          return null;
        }
        function postIngredient(category_id, location_id){
          // make arg for this an ingredient object
          var defer = $q.defer();
          $http.post('http://localhost:3000/api/ingredients', {"category_id": category_id, "location_id": location_id})
            .success(function(data) {
              ingredients.push(data);
              // is cache.put necessary?
              cache.put('ingredients',ingredients);
              defer.resolve(data);
            })
            .error(function(status) {
              console.log('エラー: ' + status);
              defer.reject(status);
            });
          return defer.promise;
        }
        function patchIngredient(ingredient){
          $http.patch( 'http://localhost:3000/api/ingredients/' + ingredient.id, {"ingredient": ingredient})
            .success(function() {
              // reference local findByIdArray?
              var foundIng = UtilitiesFactory.findByIdArray(ingredients, ingredient.id);
              foundIng.location_id = ingredient.location_id;
              foundIng.category_id = ingredient.category_id;
              cache.put('ingredients', ingredients);
            })
            .error(function(status) {console.log('エラー: ' + status);});
        }
        function removeIngredient(ingredient){
          $http.delete('http://localhost:3000/api/ingredients/' + ingredient.id, {"ingredient": ingredient})
            .success(function() {
              for(var i = 0; i < ingredients.length; i++) {
                if(ingredients[i].id == ingredient.id) {ingredients.splice(i,1);}
              }
              cache.put('ingredients', ingredients);
            })
            .error(function(status) {console.log('エラー: ' + status);});
        }

    }

})();
