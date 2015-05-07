Category.create(name: 'Raw Protein', lifespan:30, children:[
  Category.create(name: 'Meats', lifespan:30, children:[
    Category.create(name: 'Chicken', lifespan:30, children:[
      Category.create(name: 'Whole Chicken', lifespan:30),
      Category.create(name: 'Chicken Breast', lifespan:30),
      Category.create(name: 'Chicken Legs', lifespan:30),
      Category.create(name: 'Chicken Drumstick', lifespan:30),
      Category.create(name: 'Ground Chicken', lifespan:30)
      ]),
    Category.create(name: 'Beef', lifespan:30, children:[
      Category.create(name: 'Beef Steak', lifespan:30),
      Category.create(name: 'Beef Roast', lifespan:30),
      Category.create(name: 'Ground Beef', lifespan:30)
      ]),
    Category.create(name: 'Turkey', lifespan:30, children:[
      Category.create(name: 'Whole Turkey', lifespan:30),
      Category.create(name: 'Turkey Breast', lifespan:30),
      Category.create(name: 'Ground Turkey', lifespan:30)
      ]),
    Category.create(name: 'Pork', lifespan:30, children:[
      Category.create(name: 'Pork Chops', lifespan:30),
      Category.create(name: 'Pork Roast', lifespan:30),
      Category.create(name: 'Ground Pork', lifespan:30)
      ]),
    Category.create(name: 'Buffalo', lifespan:30, children:[
      Category.create(name: 'Buffalo Steak', lifespan:30),
      Category.create(name: 'Buffalo Roast', lifespan:30),
      Category.create(name: 'Ground Buffalo', lifespan:30)
      ]),
    Category.create(name: 'Lamb', lifespan:30, children:[
      Category.create(name: 'Lamb Steak', lifespan:30),
      Category.create(name: 'Lamb Roast', lifespan:30),
      Category.create(name: 'Ground Lamb', lifespan:30)
      ])
    ]),
  Category.create(name: 'Seafood', lifespan:30, children:[
    Category.create(name: 'Fish', lifespan:30, children:[
      Category.create(name: 'Salmon', lifespan:30, children:[
        Category.create(name: 'Whole Salmon', lifespan:30),
        Category.create(name: 'Salmon Fillet', lifespan:30),
        Category.create(name: 'Salmon Steaks', lifespan:30)
        ]),
      Category.create(name: 'White fish', lifespan:30, children:[
        Category.create(name: 'Whole Whitefish', lifespan:30),
        Category.create(name: 'Whitefish Fillet', lifespan:30)
        ])
      ]),
    Category.create(name: 'Shellfish', lifespan:30, children:[
      Category.create(name: 'Shrimp', lifespan:30),
      Category.create(name: 'Clams', lifespan:30),
      Category.create(name: 'Mussels', lifespan:30)
      ])
    ])
  ])

Category.create(name: 'Raw Fruits/Veggies', lifespan:14, children:[
  Category.create(name: 'Potatoes', lifespan:14, children:[
    Category.create(name: 'Russet', lifespan:14),
    Category.create(name: 'Red', lifespan:14),
    Category.create(name: 'Yukon', lifespan:14),
    Category.create(name: 'Sweet/Yams', lifespan:14)
    ]),
  Category.create(name: 'Roots', lifespan:14, children:[
    Category.create(name: 'Carrots', lifespan:14),
    Category.create(name: 'Radishes', lifespan:14),
    Category.create(name: 'Beets', lifespan:14),
    Category.create(name: 'Parsnips', lifespan:14)
    ]),
  Category.create(name: 'Green Veg', lifespan:14, children:[
    Category.create(name: 'Celery', lifespan:14),
    Category.create(name: 'Cucumber', lifespan:14),
    Category.create(name: 'Spinach', lifespan:14),
    Category.create(name: 'Lettuce', lifespan:14)
    ]),
  Category.create(name: 'Mushrooms', lifespan:14, children:[
    Category.create(name: 'White', lifespan:14),
    Category.create(name: 'Portabello', lifespan:14),
    Category.create(name: 'Crimini', lifespan:14)
    ]),
  Category.create(name: 'Squashes', lifespan:14, children:[
    Category.create(name: 'Pumpkins', lifespan:14),
    Category.create(name: 'Acorn Sq.', lifespan:14),
    Category.create(name: 'Butternut Sq.', lifespan:14),
    Category.create(name: 'Spaghetti Sq.', lifespan:14)
    ]),
  Category.create(name: 'Onions/Garlic', lifespan:60, children:[
    Category.create(name: 'Yellow On.', lifespan:60),
    Category.create(name: 'White On.', lifespan:60),
    Category.create(name: 'Garlic', lifespan:60),
    Category.create(name: 'Green On.', lifespan:60),
    Category.create(name: 'Leeks', lifespan:60),
    Category.create(name: 'Shallots', lifespan:60)
    ])
  ])

Category.create(name: 'Grains/Beans', lifespan:99, children:[
  Category.create(name: 'Flour', lifespan:21),
  Category.create(name: 'Whole Grains', lifespan:30),
  Category.create(name: 'Beans', lifespan:21)
  ])

Category.create(name: 'Baked Goods/Sweets', lifespan:365, children:[
  Category.create(name: 'Bread', lifespan:21),
  Category.create(name: 'Cake', lifespan:30),
  Category.create(name: 'Candy', lifespan:21),
  Category.create(name: 'Pastries', lifespan:21)
  ])

Category.create(name: 'Seasonings', lifespan:14, children:[
  Category.create(name: 'Herbs', lifespan:21, children:[
    Category.create(name: 'Rosemary', lifespan:21),
    Category.create(name: 'Parsley', lifespan:30),
    Category.create(name: 'Sage', lifespan:21),
    Category.create(name: 'Thyme', lifespan:21)
    ]),
  Category.create(name: 'Spices', lifespan:30, children:[
    Category.create(name: 'Cumin', lifespan:21),
    Category.create(name: 'Paprika', lifespan:30),
    Category.create(name: 'Coriander', lifespan:21),
    Category.create(name: 'China 5 Spice', lifespan:21)
    ]),
  Category.create(name: 'Salt', lifespan:21)
  ])

Category.create(name: 'Bottles/Cans/Jars/Bags', lifespan:14, children:[
  Category.create(name: 'Bottles', lifespan:21, children:[
    Category.create(name: 'Vinegar', lifespan:21),
    Category.create(name: 'Oil', lifespan:30),
    Category.create(name: 'Condiment', lifespan:21),
    Category.create(name: 'Beverage', lifespan:21)
    ]),
  Category.create(name: 'Cans', lifespan:30),
  Category.create(name: 'Jars', lifespan:21),
  Category.create(name: 'Bags', lifespan:21)
  ])

Category.create(name: 'Dairy/Eggs', lifespan:21, children:[
  Category.create(name: 'Milk', lifespan:21),
  Category.create(name: 'Eggs', lifespan:30),
  Category.create(name: 'Butter', lifespan:21),
  Category.create(name: 'Cream', lifespan:21)
  ])

Location.create(name: 'Kitchen', children:[
  Location.create(name: 'Under Counter'),
  Location.create(name: 'Spice Area', children:[
    Location.create(name: 'Spice Top Shelves'),
    Location.create(name: 'Spice Middle Shelves'),
    Location.create(name: 'Spice Bottom Shelves')
    ])
  ])

Location.create(name: 'Dishwasher Room', children:[
  Location.create(name: 'Deli Case', children:[
    Location.create(name: 'Deli Left Door', children:[
      Location.create(name: 'Left Door Top'),
      Location.create(name: 'Left Door Middle'),
      Location.create(name: 'Left Door Bottom')
      ]),
    Location.create(name: 'Deli Middle Door', children:[
      Location.create(name: 'Middle Door Top'),
      Location.create(name: 'Middle Door Middle'),
      Location.create(name: 'Middle Door Bottom')
      ]),
    Location.create(name: 'Deli Right Door', children:[
      Location.create(name: 'Right Door Top'),
      Location.create(name: 'Right Door Middle'),
      Location.create(name: 'Right Door Bottom')
      ])
    ]),
  Location.create(name: 'White Fridge', children:[
    Location.create(name: 'Freezer (Left)', children:[
      Location.create(name: 'Door'),
      Location.create(name: 'Top Shelves'),
      Location.create(name: 'Middle Shelves'),
      Location.create(name: 'Bottom Shelves')
      ]),
    Location.create(name: 'Fridge (Right)', children:[
      Location.create(name: 'Door'),
      Location.create(name: 'Top Shelves'),
      Location.create(name: 'Middle Shelves'),
      Location.create(name: 'Bottom Shelves')
      ])
    ])
  ])

Location.create(name: 'Loading Dock')
Location.create(name: 'Back Hall')
Location.create(name: 'Back Room')
Location.create(name: 'Walk-In Fridge')
Location.create(name: 'Alleyway')
Location.create(name: 'Basement')
