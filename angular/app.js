var potluck = angular.module('potluck', ['ui.router']);

potluck.config(function($stateProvider) {

  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html",
    resolve: {
    locationsPromise: ['locations', function(locations){
      return locations.getAll();
    }]
  }
  });



  // $stateProvider.state('addReporter', {
  //   url: "addReporter/:assignmentId",
  //   templateUrl: "partials/addReporter.html"
  // });
  //
  // $stateProvider.state('detailReporter', {
  //   url: "detailReporter/:assignmentId/:reporterId",
  //   templateUrl: "partials/detailReporter.html"
  // });

});
