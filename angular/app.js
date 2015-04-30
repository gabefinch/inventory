var potluck = angular.module('potluck', ['ui.router', 'ngResource']);

potluck.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('locations', {
    url: "/locations",
    templateUrl: "partials/locations.html"
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

});
