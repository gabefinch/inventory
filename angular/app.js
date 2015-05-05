var potluck = angular.module('potluck', ['ui.router']);

potluck.config(function($stateProvider) {

  $stateProvider
  .state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'HomeCtrl'
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
  .state('locations', {
    url: "/categories/:categoryId/locations",
    templateUrl: "partials/recieve/loc.html",
    controller: "RecLocCtrl"
  })
  .state('locationChild', {
    url: "/categories/:categoryId/locations/:locationId",
    templateUrl: "partials/recieve/locChild.html",
    controller: "RecLocCtrl"
  })
  .state('ingredientSummary', {
    url: "/ingredient/:categoryId/:locationId",
    templateUrl: "partials/recieve/ingSummary.html",
    controller: "RecIngCtrl"
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
