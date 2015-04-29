potluck.controller('LocationsCtrl',
function($scope, $stateParams, LocationsFactory){

  $scope.locations = LocationsFactory.query(); //query() returns all the entries


  $scope.test = $stateParams.locationId;

  var location = LocationsFactory.get({ id: 1 }, function() {
    console.log(location);
    console.log('hello');
  }); // get() returns a single entry

  //
  // $scope.entry = new Entry(); //You can instantiate resource class
  //
  // $scope.entry.data = 'some data';
  //
  // Entry.save($scope.entry, function() {
  //   //data saved. do something here.
  // }); //saves an entry. Assuming $scope.entry is the Entry object

});
