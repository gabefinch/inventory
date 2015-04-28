potluck.controller('LocationsCtrl',
function($scope, $http, LocationsFactory){

  $scope.test = "Hello";

  $http.get('http://localhost:3000/api/locations').
        success(function(data) {
            $scope.locations = data;
        });

  // var location = LocationsFactory.get({ id: $scope.id }, function() {
  //   console.log(entry);
  // }); // get() returns a single entry

  var locations = LocationsFactory.query(function() {
    console.log(locations);
  }); //query() returns all the entries
  //
  // $scope.entry = new Entry(); //You can instantiate resource class
  //
  // $scope.entry.data = 'some data';
  //
  // Entry.save($scope.entry, function() {
  //   //data saved. do something here.
  // }); //saves an entry. Assuming $scope.entry is the Entry object

});
