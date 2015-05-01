var potluck = angular.module('potluck', ['ui.router', 'ngResource']);

potluck.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });


  $stateProvider.state('everything', {
    url: "/everything",
    templateUrl: "partials/everything.html",
    controller: "EverythingCtrl"
  });

  $stateProvider.state('categories', {
    url: "/:categoryId",
    templateUrl: "partials/children.html",
    controller: 'ChildrenCtrl'
  });

  $stateProvider.state('store', {
    url: "/store/:categoryId",
    templateUrl: "partials/store.html",
    controller: "ChildrenCtrl"
  });

  $stateProvider.state('locations', {
    url: "/categories/:categoryId/locations",
    templateUrl: "partials/locations.html",
    controller: "LocationsCtrl"
  });

  $stateProvider.state('categories.locations', {
    url: "/categories/:categoryId/locations/:locationId",
    templateUrl: "partials/categories.locations.html",
    controller: "LocationsCtrl"
  });


});
