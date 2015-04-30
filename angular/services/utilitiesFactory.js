potluck.factory('UtilitiesFactory', function() {
  var factory = {};
  factory.findById = function(collection, id) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].id == id) {
        return collection[i];
      }
      else {
        factory.findById(collection[i].categories, id); 
    }
  }
    return null;
  };
  return factory;
});


// for (var z = 0; z < collection[i].categories.length; z++) {
//        if (collection[i].categories[z].id == id) {
//         return collection[i].categories[z];
//         }
//       }
//     }
//   