;(function() {
    'use strict';

    angular
        .module('admin')
        .factory('CategoriesFactory', CategoriesFactory);

    CategoriesFactory.$inject = ['$cacheFactory', 'UtilitiesFactory', '$http'];

    function CategoriesFactory( $cacheFactory, UtilitiesFactory, $http) {
      var cache = $cacheFactory.get('potluck');
      var categories = cache.get('categories');
      var factory = {
          categories: categories,
          find: find,
          saveAll: saveAll
      };
      return factory;

      function find(id) {
        return UtilitiesFactory.findById(categories, id);
      }

      function saveAll(categories) {
        $http.patch('http://localhost:3000/api/categories', {"categories": categories})
        .success(function() {
          alert("saved successfully!");
        })
        .error(function(status) {
          console.log('エラー: ' + status);
        });
      }
    }
})();


