potluck.controller('RecSummaryCtrl',[
  '$scope',
  '$state',
  '$stateParams',
  'IngredientsFactory',
  'CategoriesFactory',
  'LocationsFactory',
  function($scope, $state, $stateParams, IngredientsFactory,
    CategoriesFactory, LocationsFactory) {

        var ingredient = $stateParams.ingredient;

        $scope.category = CategoriesFactory.find(ingredient.category_id);

        if (ingredient.location_id) {
          $scope.hasLocation = true;
        } else {
          $scope.hasLocation = false;
        }

        $scope.recievedMessage = function() {
          if (ingredient.created_at) {
            var created_at = new Date(ingredient.created_at);
          } else {
            var created_at = new Date();
          }
          return "Arrived " + created_at.toLocaleDateString();
        };

        $scope.expireMessage = function() {
          var message;
          var shelftime = 0;
          var lifespan = $scope.category.lifespan;
          if (ingredient.created_at) {
            shelftime = Math.floor(
              (new Date().getTime() - ingredient.created_at)/(24 * 60 * 60 * 1000)
            );
          }
          if (shelftime > lifespan){
            message =  "Expired " + Math.abs(lifespan - shelftime) + " days ago";
          } else if (shelftime == lifespan) {
            message =  "Expires today";
          } else if (shelftime < lifespan) {
            message =  "Expires in " + (lifespan - shelftime) + " days.";
          }
          return message;
        };

        $scope.categoryFraction = function(){
          var ings = IngredientsFactory.fromCategory($scope.category);
          return " 1 of " + (ings.length + 1);
        };

        if (ingredient.location_id){
          $scope.location = LocationsFactory.find(ingredient.location_id);
          $scope.locationMessage = $scope.location.name;
        } else {
          $scope.locationMessage = "Unknown";
        }

        $scope.save = function(){
          if (ingredient.id) {
            IngredientsFactory.patchIngredient(ingredient);
            $state.go('recieve');
          } else {
            IngredientsFactory.postIngredient(ingredient);
            $state.go('recieve');
          }
        };

        $scope.store = function(){
          if (ingredient.id) {
            IngredientsFactory.patchIngredient(ingredient)
            $state.go('recLocTop',{ ingredientId: ingredient.id });
          } else {
            IngredientsFactory.postIngredient(ingredient)
            .then(function(returned){
              $state.go('recLocTop',{ ingredientId: returned.id });
            });
          }
        };

  }
]);
