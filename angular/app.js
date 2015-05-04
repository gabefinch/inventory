var potluck = angular.module('potluck', ['ui.router']);

potluck.config(function($stateProvider) {

  $stateProvider.state('home', { url: "",
    templateUrl: "partials/home.html",
    controller: 'HomeCtrl'
  });

  $stateProvider.state('recieve', { url: "recieve",
    templateUrl: "partials/recieve.html",
    controller: 'RecieveCtrl'
  });

  $stateProvider.state('categoryChild', {
    url: "categories/:categoryId",
    templateUrl: "partials/categoryBranch.html",
    controller: 'CategoryChildCtrl'
  });

  $stateProvider.state('categoryTop', {
    url: "/categories",
    templateUrl: "partials/categoryBranch.html",
    controller: "CategoryTopCtrl"
  });


  $stateProvider.state('store', {
    url: "/store/:categoryId",
    templateUrl: "partials/store.html",
    controller: "StoreCtrl"
  });

  $stateProvider.state('locations', {
    url: "/categories/:categoryId/locations",
    templateUrl: "partials/locations.html",
    controller: "LocationsCtrl"
  });

  $stateProvider.state('locationChild', {
    url: "/categories/:categoryId/locations/:locationId",
    templateUrl: "partials/locationChild.html",
    controller: "LocationsCtrl"
  });

  $stateProvider.state('ingredientSummary', {
    url: "/ingredient/:categoryId/:locationId",
    templateUrl: "partials/ingredientSummary.html",
    controller: "IngredientCtrl"
  });

  $stateProvider.state('unstoredItems', {
    url: "/unstored/:categoryId",
    templateUrl: "partials/unstoredItems.html",
    controller: "StoreCtrl"
  });


});
