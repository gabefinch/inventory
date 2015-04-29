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

  $stateProvider.state('location', {
    url: "/location/:locationId",
    templateUrl: "partials/locations.html"
  });

});
