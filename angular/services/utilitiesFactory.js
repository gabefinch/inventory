potluck.factory('UtilitiesFactory',
[
  '$cacheFactory',
  function($cacheFactory) {
    var cache = $cacheFactory.get('potluck');
    var factory = {};

    factory.findById = function(collection, id) {
      for (var i = 0; i <= collection.length-1; i++) {
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

  factory.findByIdArray = function(collection, id) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].id == id) {
        return collection[i];
      }
    }
    return null;
  };

  factory.findIngsByCat = function(category) {
    var ingMatches = [];
    var ingredients = cache.get('ingredients');
    for (var i = 0; i < ingredients.length; i++) {
      if (ingredients[i].category_id == category.id) {
        ingMatches.push(ingredients[i]);
      }
    }
    return ingMatches;
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

  factory.categoryCountFromIds = function(collection, ids) {
    var count = 0;
    for (var i=0; i<=collection.length-1; i++) {
      if (ids.indexOf(collection[i].category_id) != -1) {count = count + 1;}
    }
    return count
  };

  factory.locationCountFromIds = function(collection, ids) {
    var count = 0;
    for (var i=0; i<=collection.length-1; i++) {
      if (ids.indexOf(collection[i].location_id) != -1) {count = count + 1;}
    }
    return count
  };

  factory.breadcrumbs = function(category) {
    var breadcrumbs = [category];
    var categories = cache.get('categories');
    var addParent = function(category) {
      if (category.parent_id != null) {
        var parent = factory.findById(categories, category.parent_id);
        breadcrumbs.push(parent);
        addParent(parent);
      }
      else {
        return breadcrumbs;
      }
      
    };
    addParent(category);
    return breadcrumbs.reverse();
  };


  return factory;
}]);
