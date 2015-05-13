;(function() {
    'use strict';

  angular
    .module('potluck')
    .controller('PrepExpiringCtrl', PrepExpiringCtrl);

  PrepExpiringCtrl.$inject = ['$scope', '$cacheFactory', 'UtilitiesFactory'];

  function PrepExpiringCtrl($scope,$cacheFactory, UtilitiesFactory){
    var cache = $cacheFactory.get('potluck');
    $scope.ingredients = cache.get('ingredients');

    var expiringFirst= function(ingredients){
      
    };

    $scope.catIdToCat = function(category_id){
        return UtilitiesFactory.findById(cache.get('categories'),category_id);
      };
  }



})();
