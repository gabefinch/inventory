;(function() {
    'use strict';

    angular
        .module('potluck')
        .factory('UtilitiesFactory', UtilitiesFactory);

    UtilitiesFactory.$inject = ['$cacheFactory'];

    function UtilitiesFactory($cacheFactory) {
        var cache = $cacheFactory.get('potluck');
        var service = {
          findById: findById,
          findIngsByCat: findIngsByCat,
          selfAndDescendantsIds: selfAndDescendantsIds,
          categoryCountFromIds: categoryCountFromIds,
          locationCountFromIds: locationCountFromIds,
          breadcrumbs: breadcrumbs,
          locBreadcrumbs: locBreadcrumbs
        };
        return service;

        function findById(collection, id) {
          for (var i = 0; i <= collection.length-1; i++) {
            if (collection[i].id == id) {
              return collection[i];
            } else {
              var foundChild = findById(collection[i].children, id);
              if (foundChild) {
                return foundChild;
              }
            }
          }
        }
        // deprecated try to point to IngredientsFactory.allCat and eventually remove
        function findIngsByCat(category) {
          var ingMatches = [];
          var ingredients = cache.get('ingredients');
          for (var i = 0; i < ingredients.length; i++) {
            if (ingredients[i].category_id == category.id) {
              ingMatches.push(ingredients[i]);
            }
          }
          return ingMatches;
        }

        function selfAndDescendantsIds(startingNode) {
          var nodeIds =  [];
          var pushId = function(node) {
            nodeIds.push(node.id);
            if (node.children.length > 0) {
              for (var i=0; i <= node.children.length-1; i++) {
                pushId(node.children[i])
              }
            }
          };
          pushId(startingNode);
          return nodeIds;
        }

        function categoryCountFromIds(collection, ids) {
          var count = 0;
          for (var i=0; i<=collection.length-1; i++) {
            if (ids.indexOf(collection[i].category_id) != -1) {count = count + 1;}
          }
          return count
        }

        function locationCountFromIds(collection, ids) {
          var count = 0;
          for (var i=0; i<=collection.length-1; i++) {
            if (ids.indexOf(collection[i].location_id) != -1) {count = count + 1;}
          }
          return count
        }

        function breadcrumbs(category) {
          var breadcrumbs = [category];
          var categories = cache.get('categories');
          var addParent = function(category) {
            if (category.parent_id != null) {
              var parent = findById(categories, category.parent_id);
              breadcrumbs.push(parent);
              addParent(parent);
            }
            else {
              return breadcrumbs;
            }

          };
          addParent(category);
          return breadcrumbs.reverse();
        }

      function locBreadcrumbs(location) {
          var breadcrumbs = [location];
          var locations = cache.get('locations');
          var addParent = function(location) {
            if (location.parent_id != null) {
              var parent = findById(locations, location.parent_id);
              breadcrumbs.push(parent);
              addParent(parent);
            }
            else {
              return breadcrumbs;
            }

          };
          addParent(location);
          return breadcrumbs.reverse();
        }

    }
})();
