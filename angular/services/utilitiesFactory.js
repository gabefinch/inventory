potluck.factory('UtilitiesFactory', function() {
  var factory = {};
  factory.findById = function(collection, id) {
    for (var i = 0; i < collection.length-1; i++) {
      var currentNode = collection[i]
          currentId = currentNode.id
          currentChildren = currentNode.children;
      if (currentId == id) {
        return currentNode;
      }
      else {
        var foundDescendant = this.findById(currentChildren, id);
        if (foundDescendant) {
          return foundDescendant;
        }
      }
    }
  };
  return factory;
});
