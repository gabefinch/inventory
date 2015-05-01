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

});
