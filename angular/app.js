var potluck = angular.module('potluck', ['ui.router']);

// Allow Angular UI to log errors
// potluck.run(($rootScope) => {
//   $rootScope.$on("$stateChangeError", console.log.bind(console));
// });

// Load Everything JSON at app load
potluck.run(function($http,$cacheFactory){
  var factory = {};
	var cache = $cacheFactory('potluck');
	factory.reloadCache =
		$http.get('http://localhost:3000/api/everything').
		  success(function(data) {
		    cache.put('categories', data.categories);
		    cache.put('locations', data.locations);
		    cache.put('ingredients', data.ingredients);
		  }).
		  error(function(status) {
				console.log('エラー');
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
  .state('categoryTop', {
    url: "/categories",
    templateUrl: "partials/recieve/catBranch.html",
    controller: "RecCatTopCtrl"
  })
  .state('categoryChild', {
    url: "/categories/:categoryId",
    templateUrl: "partials/recieve/catBranch.html",
    controller: 'RecCatChildCtrl'
  })
  .state('store', {
    url: "/store/:categoryId",
    templateUrl: "partials/recieve/store.html",
    controller: "RecStoreCtrl"
  })
  .state('unstoredItems', {
    url: "/unstored",
    templateUrl: "partials/recieve/unstoredItems.html",
    controller: "RecStoreCtrl"
  })
  .state('ingredientLocation', {
    url: "/ingredient/:ingredientId/locations",
    templateUrl: "partials/recieve/ingLoc.html",
    controller: "RecLocCtrl"
  })
  .state('ingredientLocationChild', {
    url: "/ingredients/:ingredientId/locations/:locationId",
    templateUrl: "partials/recieve/ingLocChild.html",
    controller: "RecLocCtrl"
  })
  .state('unstoredIngredientSummary', {
    url: "/ingredient/:ingredientId/:locationId",
    templateUrl: "partials/recieve/unstoredIngSummary.html",
    controller: "RecIngCtrl"
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
  });

});
