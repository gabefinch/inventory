potluck.controller('LocationsCtrl',
function($scope, $stateParams, LocationsFactory, EverythingFactory, UtilitiesFactory){


  $scope.children = EverythingFactory.children;
  $scope.locations = EverythingFactory.locations;

  // Hello!! for some reason the two things below are throwing TypeError: Cannot read property 'length' of undefined errors

  // $scope.headerCategory = UtilitiesFactory.findById(EverythingFactory.children, $stateParams.categoryId)
  
  // $scope.mainLocation = UtilitiesFactory.findById($scope.locations, $stateParams.locationId)

  console.log($scope.locations.id)
  console.log($scope.locations)
  console.log($scope.mainLocation)





  var location = LocationsFactory.get({ id: 1 }, function() {

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
