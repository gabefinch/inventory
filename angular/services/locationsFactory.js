;(function() {
    'use strict';

    angular
        .module('potluck')
        .factory('LocationsFactory', LocationsFactory);

    LocationsFactory.$inject = ['$cacheFactory', 'UtilitiesFactory'];

    function LocationsFactory($cacheFactory, UtilitiesFactory) {
      var cache = $cacheFactory.get('potluck');
      var locations = cache.get('locations');
        var service = {
            find: find
        };
        return service;

        function find(id) {
          return UtilitiesFactory.findById(locations,id);
        }

    }
})();
