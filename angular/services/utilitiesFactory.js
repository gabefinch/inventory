potluck.factory('UtilitiesFactory', function() {
  var factory = {};

  factory.findById = function(collection, id) {

    for (var i=0; i <= collection.length-1; i++) {
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

  factory.selfAndDescendantsIds = function(startingNode) {
    var nodeIds =  [];
    var pushId = function(node) {
      nodeIds.push(node.id);
      if (node.children.length > 0) {
        for (var i=0; i <= node.children.length-1; i++) {
          pushId(node.children[i])
        }
      }
    };
    pushId(startingNode);
    return nodeIds;
  };

  factory.countFromIds = function(collection, ids) {
    var count = 0;
    for (var i=0; i<=collection.length-1; i++) {
      if (ids.indexOf(collection[i].id) != -1) {
        count = count + 1;
      }
    }
    return count
  };

  return factory;
});
