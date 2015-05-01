var potluck = angular.module('potluck', ['ui.router']);

potluck.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    controller: 'HomeCtrl'
  });


  $stateProvider.state('categoryTop', {
    url: "/categories",
    templateUrl: "partials/categoryNode.html",
    controller: "CategoryTopCtrl"
  });

  $stateProvider.state('categoryChild', {
    url: "categories/:categoryId",
    templateUrl: "partials/categoryNode.html",
    controller: 'CategoryChildCtrl'
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


});
