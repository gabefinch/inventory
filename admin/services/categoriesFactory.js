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
          erase: erase
      };
      return factory;

      function find(id) {
        return UtilitiesFactory.findById(categories, id);
      }

      function erase(id) {
        $http.delete('http://localhost:3000/api/categories/' + id)
        .success(function() {
          var cat = find(id);
          var parent = find(cat.parent_id) || null;
          if (parent) {
            var index = parent.children.indexOf(cat);
            parent.children.splice(index,1);
          } else {
            var index = categories.indexOf(cat);
            categories.splice(index,1);
          }
          alert("you done deleted it!");
        })
        .error(function(status) {
          console.log('エラー: ' + status);
        });
      }
    }
})();
