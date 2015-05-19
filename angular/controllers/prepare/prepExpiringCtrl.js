;(function() {
    'use strict';

  angular
    .module('potluck')
    .controller('PrepExpiringCtrl', PrepExpiringCtrl);

  PrepExpiringCtrl.$inject = ['$scope', 'IngredientsFactory', 'CategoriesFactory'];

  function PrepExpiringCtrl($scope, IngredientsFactory, CategoriesFactory){
    $scope.ingredients = IngredientsFactory.ingredients;

    $scope.name = function(category_id){
        return CategoriesFactory.find(category_id).name;
      };
  }

})();
