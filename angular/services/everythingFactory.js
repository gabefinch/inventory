potluck.factory('EverythingFactory', function(){
	
	var everything =	{
	  "categories": [
	    { "id": 1,
	      "name": "protein",
	      "categories":[
	        { "id": 2,
	          "name": "meat",
	          "categories": [
	            { "id": 3,
	              "name": "chicken",
		              "categories": [
	                { "id": 17,
	                  "name": "ground-chicken"
	                }
	              ]
	            },
	            { "id": 4,
	              "name": "beef"
	            }
	          ]
	        },
	        { "id": 5,
	          "name": "seafood",
	          "categories": [
	            { "id": 6,
	              "name": "fish"
	            },
	            { "id": 7,
	              "name": "shellfish"
	            }
	          ]
	        }
	      ]
	    },
	    { "id": 8,
	      "name": "vegetable",
	      "categories":[
	        { "id": 9,
	          "name": "root",
	          "categories": [
	            { "id": 10,
	              "name": "potato"
	            },
	            { "id": 11,
	              "name": "carrot"
	            }
	          ]
	        },
	        { "id": 12,
	          "name": "leaf",
	          "categories": [
	            { "id": 13,
	              "name": "lettuce"
	            },
	            { "id": 14,
	              "name": "collards"
	            }
	          ]
	        }
	      ]
	    }
	  ],
	  "locations": [
	    { "id": 1,
	      "name": "fridge",
	      "locations":[
	        { "id": 2,
	          "name": "top"
	        },
	        { "id": 3,
	          "name": "bottom"
	        }
	      ]
	    },
	    { "id": 4,
	      "name": "freezer",
	      "locations":[
	        { "id": 5,
	          "name": "top"
	        },
	        { "id": 6,
	          "name": "bottom"}]
	    }
	  ],
	  "ingredients":[
	    {"category_id": 3, "location_id": 3, "created_at": "1430265676000" },
	    {"category_id": 4, "location_id": 6, "created_at": "1430265676000" },
	    {"category_id": 11, "location_id": 2, "created_at": "1430265676000" },
	    {"category_id": 13, "location_id": 2, "created_at": "1430265676000" }
	  ]
	};
	return everything;
});