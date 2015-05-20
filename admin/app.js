var admin = angular.module('admin', ['ui.router', 'ui.tree']);

admin.run(function($http,$cacheFactory){
  var cache = $cacheFactory('potluck');
  $http.get('http://localhost:3000/api/everything').
    success(function(data) {
      cache.put('categories', data.categories);
      cache.put('locations', data.locations);
      cache.put('ingredients', data.ingredients);
    }).
    error(function(status) {
      console.log('エラー: ' + status);
  });
});

admin.config(function($stateProvider) {$stateProvider
          .state('home', {
            url: "",
            templateUrl: "partials/home.html",
            controller: "CategoriesCtrl"
          })
          .state('inventory', {
            url: "/inventory",
            templateUrl: "partials/inventory.html",
            controller: "InventoryCtrl"
          })
});
