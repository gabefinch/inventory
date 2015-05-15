;(function() {
    'use strict';

    angular
        .module('potluck')
        .factory('CategoriesFactory', CategoriesFactory);

    CategoriesFactory.$inject = ['$cacheFactory', 'UtilitiesFactory'];

    function CategoriesFactory($cacheFactory, UtilitiesFactory) {
        var cache = $cacheFactory.get('potluck');
        var categories = cache.get('categories');
        var factory = {
            categories: categories,
            find: find,
            breadcrumbs: breadcrumbs
        };
        return factory;

        function find(id) {
          return UtilitiesFactory.findById(categories, id);
        }

        function breadcrumbs(category) {
          var breadcrumbs = [category];
          var addParent = function(category) {
            if (category.parent_id != null) {
              var parent = find(category.parent_id);
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

    }
})();
