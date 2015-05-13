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
            catById: catById,
            
        };

        return factory;

        function catById(id) {
          return UtilitiesFactory.findById(categories,id);
        }
    }
})();
