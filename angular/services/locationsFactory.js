potluck.factory('LocationsFactory', function($resource){
  return $resource('http://localhost:3000/api/locations');

});
