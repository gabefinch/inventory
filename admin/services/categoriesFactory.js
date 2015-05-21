;(function() {
    'use strict';

    angular
        .module('admin')
        .factory('CategoriesFactory', CategoriesFactory);

    CategoriesFactory.$inject = ['$cacheFactory', 'UtilitiesFactory'];

    function CategoriesFactory( $cacheFactory, UtilitiesFactory) {
      var cache = $cacheFactory.get('potluck');
      var categories = cache.get('categories');
      var factory = {
          categories: categories,
          find: find
      };
      return factory;

      function find(id) {
        return UtilitiesFactory.findById(categories, id);
      }

    }
})();
