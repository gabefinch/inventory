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
            locations: locations,
            find: find,
            breadcrumbs: breadcrumbs
        };
        return service;

        function find(id) {
          return UtilitiesFactory.findById(locations,id);
        }

        function breadcrumbs(location) {
          var breadcrumbs = [location];
          var addParent = function(location) {
            if (location.parent_id != null) {
              var parent = find(location.parent_id);
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
