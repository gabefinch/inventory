var potluck = angular.module('potluck', ['ui.router']);

// Allow Angular UI to log errors
// potluck.run(($rootScope) => {
//   $rootScope.$on("$stateChangeError", console.log.bind(console));
// });

// Load Everything JSON at app load
potluck.run(function($http,$cacheFactory){
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

// Capture previous state
// potluck.run(function ($rootScope, $state) {
//   $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) {
//     $state.previous = fromState;
//   });
// });

potluck.config(function($stateProvider) {

  $stateProvider
  .state('home', {
    url: "",
    templateUrl: "partials/home.html"
  })

  .state('recieve', {
    url: "/recieve",
    templateUrl: "partials/recieve/recieve.html",
    controller: 'RecieveCtrl'
  })
  .state('recCatTop', {
    url: "/categories",
    templateUrl: "partials/recieve/catBranch.html",
    controller: "RecCatTopCtrl"
  })
  .state('recCatChild', {
    url: "/categories/:categoryId",
    templateUrl: "partials/recieve/catBranch.html",
    controller: 'RecCatChildCtrl'
  })
  .state('recSave', {
    url: "/save/:categoryId",
    templateUrl: "partials/recieve/save.html",
    controller: "RecSaveCtrl"
  })
  .state('unstoredItems', {
    url: "/unstored",
    templateUrl: "partials/recieve/unstoredItems.html",
    controller: "RecQueueCtrl"
  })
  .state('recLocTop', {
    url: "/ingredient/:ingredientId/locations",
    templateUrl: "partials/recieve/locBranch.html",
    controller: "RecLocTopCtrl"
  })
  .state('recLocChild', {
    url: "/ingredients/:ingredientId/locations/:locationId",
    templateUrl: "partials/recieve/locBranch.html",
    controller: "RecLocChildCtrl"
  })
  .state('prep', {
    url: "/prepare",
    templateUrl: "partials/prepare/prepare.html",
    controller: "PrepareCtrl"
  })
  .state('prepCatTop', {
    url: "/prepare/categories",
    templateUrl: "partials/prepare/catBranch.html",
    controller: "PrepCatTopCtrl"
  })
  .state('prepCatChild', {
    url: "/prepare/categories/:categoryId",
    templateUrl: "partials/prepare/catBranch.html",
    controller: "PrepCatChildCtrl"
  })
  .state('prepLocTop', {
    url: "/prepare/locations",
    templateUrl: "partials/prepare/locBranch.html",
    controller: "PrepLocTopCtrl"
  })
  .state('prepLocChild', {
    url: "/prepare/locations/:locationId",
    templateUrl: "partials/prepare/locBranch.html",
    controller: "PrepLocChildCtrl"
  })
  .state('prepIng', {
    url: "/prepare/ingredients/:ingredientId",
    templateUrl: "partials/prepare/ing.html",
    controller: "PrepIngCtrl"
  })
  .state('prepBasket', {
    url: "/prepare/basket",
    templateUrl: "partials/prepare/basket.html",
    controller: "PrepBasketCtrl"
  })
  .state('prepExpiring', {
    url: "/prepare/expiring",
    templateUrl: "partials/prepare/expiring.html",
    controller: "PrepExpiringCtrl"
  });

});
