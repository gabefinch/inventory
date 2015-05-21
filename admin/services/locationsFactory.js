;(function() {
    'use strict';

    angular
        .module('admin')
        .factory('LocationsFactory', LocationsFactory);

    LocationsFactory.$inject = ['$cacheFactory'];

    function LocationsFactory($cacheFactory) {
        var cache = $cacheFactory.get('potluck');
        var locations = cache.get('locations');
        var factory = {
            locations: locations,
        };
        return factory;
            }
})();