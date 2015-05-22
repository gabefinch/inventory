;(function() {
    'use strict';

    angular
        .module('admin')
        .factory('LocationsFactory', LocationsFactory);

    LocationsFactory.$inject = ['$cacheFactory', 'UtilitiesFactory', '$http'];

    function LocationsFactory($cacheFactory, UtilitiesFactory, $http) {
        var cache = $cacheFactory.get('potluck');
        var locations = cache.get('locations');
        var factory = {
            locations: locations,
            find:find,
            erase: erase
        };
        return factory;

        function find(id) {
          return UtilitiesFactory.findById(locations, id);
        }


        function erase(id) {
        $http.delete('http://localhost:3000/api/locations/' + id)
        .success(function() {
          var loc = find(id);
          var parent = find(loc.parent_id) || null;
          if (parent) {
            var index = parent.children.indexOf(loc);
            parent.children.splice(index,1);
          } else {
            var index = locations.indexOf(loc);
            locations.splice(index,1);
          }
          alert("you done deleted it!");
        })
        .error(function(status) {
          console.log('エラー: ' + status);
        });
      }
    }
})();
