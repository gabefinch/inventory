potluck.controller('RecieveCtrl',
[
  '$scope',
  'IngredientsFactory',
  function($scope, IngredientsFactory){

    var ingredients = IngredientsFactory.ingredients;

    $scope.queueCount = function() {
      var count = 0;
      for (var i=0; i<=ingredients.length-1; i++) {
        if (ingredients[i].location_id == null) {count += 1;}
      }
      return count;
    };


}]);
