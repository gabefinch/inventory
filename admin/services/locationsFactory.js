;(function() {
    'use strict';

    angular
        .module('admin')
        .factory('LocationsFactory', LocationsFactory);

    LocationsFactory.$inject = ['$cacheFactory', 'UtilitiesFactory'];

    function LocationsFactory($cacheFactory, UtilitiesFactory) {
        var cache = $cacheFactory.get('potluck');
        var locations = cache.get('locations');
        var factory = {
            locations: locations,
            find:find
        };
        return factory;

        function find(id) {
          return UtilitiesFactory.findById(locations, id);
        }
    }
})();
