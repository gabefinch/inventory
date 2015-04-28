var potluck = angular.module('potluck', ['ui.router']);

potluck.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('locations', {
    url: "/locations",
    templateUrl: "partials/locations.html"
  });


});
