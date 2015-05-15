;(function() {
    'use strict';

    angular
      .module('potluck')
      .factory('IngredientsFactory', IngredientsFactory);

    IngredientsFactory.$inject = ['$http','$cacheFactory', '$q', 'UtilitiesFactory'];

    function IngredientsFactory($http, $cacheFactory, $q, UtilitiesFactory){
        var cache = $cacheFactory.get('potluck');
        var ingredients = cache.get('ingredients');

        var factory = {
            ingredients: ingredients,
            find: find,
            fromCategory : fromCategory,
            belowCategory: belowCategory,
            belowLocation: belowLocation,
            postIngredient: postIngredient,
            patchIngredient: patchIngredient,
            removeIngredient: removeIngredient,
            basket: basket,
            basketUseAll: basketUseAll,
            basketRemoveAll: basketRemoveAll
        };
        return factory;



        function find(id) {
          for (var i = 0; i < ingredients.length; i++) {
            if (ingredients[i].id == id) {
              return ingredients[i];
            }
          }
          return null;
        }

        function fromCategory(location) {
          var ingMatches = [];
          var ingredients = cache.get('ingredients');
          for (var i = 0; i < ingredients.length; i++) {
            if (ingredients[i].category_id == category.id) {
              ingMatches.push(ingredients[i]);
            }
          }
          return ingMatches;
        }

        function belowCategory(category) {
          var nodeIds = UtilitiesFactory.flatBranchIds(category);
          var ingsBelow = [];
          for (var i=0; i<=ingredients.length-1; i++) {
            if (nodeIds.indexOf(ingredients[i].category_id) != -1) {
              ingsBelow.push(ingredients[i]);
            }
          }
          return ingsBelow
        }

        function belowLocation(location) {
          var nodeIds = UtilitiesFactory.flatBranchIds(location);
          var ingsBelow = [];
          for (var i=0; i<=ingredients.length-1; i++) {
            if (nodeIds.indexOf(ingredients[i].location_id) != -1) {
              ingsBelow.push(ingredients[i]);
            }
          }
          return ingsBelow
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
              var foundIng = find(ingredient.id);
              foundIng.location_id = ingredient.location_id;
              foundIng.category_id = ingredient.category_id;
              cache.put('ingredients', ingredients);
            })
            .error(function(status) {
              console.log('エラー: ' + status);
            });
        }

        function removeIngredient(ingredient){
          var defer = $q.defer();
          $http.delete('http://localhost:3000/api/ingredients/' + ingredient.id, {"ingredient": ingredient})
            .success(function() {
              for(var i = 0; i < ingredients.length; i++) {
                if(ingredients[i].id == ingredient.id) {ingredients.splice(i,1);}
              }
              cache.put('ingredients', ingredients);
              defer.resolve();
            })
            .error(function(status) {
              console.log('エラー: ' + status);
              defer.reject(status);
            });
          return defer.promise;
        }

        function basket() {
          var basket = [];
          for(var i = 0; i < ingredients.length; i++) {
            if(ingredients[i].basketed == true) {
              basket.push(ingredients[i]);
            }
          }
          return basket;
        }

        function basketUseAll(){
          for(var i = 0; i < ingredients.length; i++){
            if(ingredients[i].basketed == true){
              delete ingredients[i].basketed;
              removeIngredient(ingredients[i]);
            }
          }
        }

        function basketRemoveAll(){
          for(var i = 0; i < ingredients.length; i++){
            delete ingredients[i].basketed;
          }
        }

    }
})();
