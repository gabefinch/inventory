;(function() {
    'use strict';

    angular
        .module('admin')
        .factory('UtilitiesFactory', UtilitiesFactory);

    UtilitiesFactory.$inject = [];

    function UtilitiesFactory() {
        var service = {
          findById: findById,
          flatBranchIds: flatBranchIds
        };
        return service;
        // rename treeFind
        function findById(collection, id) {
          for (var i = 0; i <= collection.length-1; i++) {
            if (collection[i].id == id) {
              return collection[i];
            } else {
              var foundChild = findById(collection[i].children, id);
              if (foundChild) {
                return foundChild;
              }
            }
          }
        }

        function flatBranchIds(node) {
          var nodeIds =  [];
          var pushId = function(node) {
            nodeIds.push(node.id);
            if (node.children.length > 0) {
              for (var i=0; i <= node.children.length-1; i++) {
                pushId(node.children[i])
              }
            }
          };
          pushId(node);
          return nodeIds;
        }

    }
})();
