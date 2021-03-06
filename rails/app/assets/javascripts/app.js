var potluck = angular.module('potluck', ['ui.router']);

// Allow Angular UI to log errors
// potluck.run(($rootScope) => {
//   $rootScope.$on("$stateChangeError", console.log.bind(console));
// });

// Load Everything JSON at app load
potluck.run(function($http,$cacheFactory){
  var cache = $cacheFactory('potluck');
  $http.get('/api/everything').
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
    templateUrl: "/assets/partials/home.html"
  })

  .state('recieve', {
    url: "/recieve",
    templateUrl: "/assets/partials/recieve/recieve.html",
    controller: 'RecieveCtrl'
  })
  .state('recQueue', {
    url: "/unstored",
    templateUrl: "/assets/partials/recieve/queue.html",
    controller: "RecQueueCtrl"
  })
  .state('recSummary', {
    url:"/recieve/summary",
    params: {ingredient: null},
    templateUrl: "/assets/partials/recieve/summary.html",
    controller: "RecSummaryCtrl"
  })
  .state('recCatTop', {
    url: "/categories",
    templateUrl: "/assets/partials/recieve/catBranch.html",
    controller: "RecCatTopCtrl"
  })
  .state('recCatChild', {
    url: "/categories/:categoryId",
    templateUrl: "/assets/partials/recieve/catBranch.html",
    controller: 'RecCatChildCtrl'
  })
  .state('recLocTop', {
    url: "/ingredient/:ingredientId/locations",
    templateUrl: "/assets/partials/recieve/locBranch.html",
    controller: "RecLocTopCtrl"
  })
  .state('recLocChild', {
    url: "/ingredients/:ingredientId/locations/:locationId",
    templateUrl: "/assets/partials/recieve/locBranch.html",
    controller: "RecLocChildCtrl"
  })

  .state('prep', {
    url: "/prepare",
    templateUrl: "/assets/partials/prepare/prepare.html",
    controller: "PrepareCtrl"
  })
  .state('prepCatTop', {
    url: "/prepare/categories",
    templateUrl: "/assets/partials/prepare/catBranch.html",
    controller: "PrepCatTopCtrl"
  })
  .state('prepCatChild', {
    url: "/prepare/categories/:categoryId",
    templateUrl: "/assets/partials/prepare/catBranch.html",
    controller: "PrepCatChildCtrl"
  })
  .state('prepLocTop', {
    url: "/prepare/locations",
    templateUrl: "/assets/partials/prepare/locBranch.html",
    controller: "PrepLocTopCtrl"
  })
  .state('prepLocChild', {
    url: "/prepare/locations/:locationId",
    templateUrl: "/assets/partials/prepare/locBranch.html",
    controller: "PrepLocChildCtrl"
  })
  .state('prepIng', {
    url: "/prepare/ingredients/:ingredientId",
    templateUrl: "/assets/partials/prepare/ing.html",
    controller: "PrepIngCtrl"
  })
  .state('prepBasket', {
    url: "/prepare/basket",
    templateUrl: "/assets/partials/prepare/basket.html",
    controller: "PrepBasketCtrl"
  })
  .state('prepExpiring', {
    url: "/prepare/expiring",
    templateUrl: "/assets/partials/prepare/expiring.html",
    controller: "PrepExpiringCtrl"
  });

});
