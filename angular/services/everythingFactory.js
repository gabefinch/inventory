potluck.factory('EverythingFactory', function(){
	
	var everything =	{
	  "categories": [
	    { "id": 1,
	      "name": "protein",
	      "children":[
	        { "id": 2,
	          "name": "meat",
	          "children": [
	            { "id": 3,
	              "name": "chicken",
		              "children": [
	                { "id": 17,
	                  "name": "ground-chicken",
	              		"children": []
	                }
	              ]
	            },
	            { "id": 4,
	              "name": "beef",
	              "children": []
	            }
	          ]
	        },
	        { "id": 5,
	          "name": "seafood",
	          "children": [
	            { "id": 6,
	              "name": "fish",
	              "children": []
	            },
	            { "id": 7,
	              "name": "shellfish",
	              "children": []
	            }
	          ]
	        }
	      ]
	    },
	    { "id": 8,
	      "name": "vegetable",
	      "children":[
	        { "id": 9,
	          "name": "root",
	          "children": [
	            { "id": 10,
	              "name": "potato",
	              "children": []
	            },
	            { "id": 11,
	              "name": "carrot",
	              "children": []
	            }
	          ]
	        },
	        { "id": 12,
	          "name": "leaf",
	          "children": [
	            { "id": 13,
	              "name": "lettuce",
	              "children": []
	            },
	            { "id": 14,
	              "name": "collards",
	              "children": []
	            }
	          ]
	        }
	      ]
	    }
	  ],
	  "locations": [
	    { "id": 1,
	      "name": "fridge",
	      "children":[
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
	      "children":[
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