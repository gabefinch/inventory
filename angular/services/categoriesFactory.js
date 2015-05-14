(function() {
    'use strict';

    angular
        .module('potluck')
        .factory('categoriesFactory', categoriesFactory);

    categoriesFactory.$inject = '$cacheFactory', 'UtilitiesFactory'];

    function categoriesFactory($cacheFactory, UtilitiesFactory) {

      var cache = $cacheFactory.get('potluck');
      var categories = cache.get('categories');
        var factory = {
            find: find,

        };

        return factory;

        function find(id) {
          return UtilitiesFactory.findById(categories,id);
        }
    }
})();
