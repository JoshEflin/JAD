const groceryData = [
  {
    name: "Salt",
    description:
      "Salt is a mineral substance used to enhance the flavor of food. It is commonly used in cooking and baking as a seasoning and preservative.",
    photo:
      "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg",
  },
  {
    name: "Pepper",
    description: " Pepper refers to the dried fruits of the Piper nigrum plant and is used as a spice to add heat and flavor to dishes. It comes in various forms, such as black pepper, white pepper, and red pepper.",
    photo:
      "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg",
  },
  {
    name: "Olive oil",
    description:"Olive oil is a liquid fat extracted from olives and is widely used in cooking and dressing. It is known for its health benefits and is often used as a healthier alternative to other cooking oils",
    photo:
      "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg",
  },
  {
    name: "Butter",
    description:" Butter is a dairy product made from the fat and protein components of milk or cream. It is commonly used in baking, cooking, and as a spread on bread. ",
    photo:
      "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg",
  },
  {
    name: "Garlic",
    description:"Garlic is a plant in the Allium family and is used as a flavoring ingredient in various cuisines. It has a strong, pungent taste and aroma and is known for its potential health benefits",
    photo:
      "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg",
  },
  {
    name: "Onion",
    description:"Onion is a bulb vegetable commonly used in cooking as a flavoring ingredient. It comes in different varieties and adds a distinct taste and aroma to dishes",
    photo:
      "https://www.edamam.com/food-img/a7f/a7fd8e3b26066b4c96d5b5804e7f0976.jpg",
  },
  {
    name: "Flour",
    description:"Flour is a finely ground powder made from cereal grains, legumes, or roots. It is a fundamental ingredient in baking and cooking, used to make bread, cakes, pastries, and more.",
    photo:
      "https://www.edamam.com/food-img/f46/f46a64137365c10237522be5980f769c.jpg",
  },
  {
    name: "Sugar",
    description:"Sugar is a sweet, crystalline substance extracted from various sources like sugarcane and sugar beets. It is widely used as a sweetener in cooking, baking, and beverages.",
    photo:
      "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg",
  },
  {
    name: "Egg",
    description:"Eggs are laid by various animals, most commonly hens, and are widely used in cooking and baking. They are a versatile ingredient and can be prepared in numerous ways.",
    photo:
      "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg",
  },
  {
    name: "Milk",
    description:"Milk is a nutrient-rich liquid produced by mammals, primarily cows. It is consumed as a beverage and used as an ingredient in various recipes, including dairy products and baked goods.",
    photo:
      "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg",
  },
  {
    name: "Cheese",
    description:"It will make you too babygurl",
    photo:
      "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg",
  },
  {
    name: "Tomatoes",
    description:"A Red fredgetable (fruit and vegetable hybrid) gifted by God to confuse the Plebs",
    photo:
      "https://www.edamam.com/food-img/23e/23e727a14f1035bdc2733bb0477efbd2.jpg",
  },
  {
    name: "Chicken",
    description:" They Quack, They Honk, They SCREAM",
    photo:
      "https://www.edamam.com/food-img/d33/d338229d774a743f7858f6764e095878.jpg",
  },
  {
    name: "Beef",
    description:"Ever thought about how you could eat a cow more effectively? Try BEEF!",
    photo:
      "https://www.edamam.com/food-img/634/634aa9adfb65afb5fef3df13d7334985.jpg",
  },
  {
    name: "Pork",
    description:" The edible components of a freshly slaughtered swine",
    photo:
      "https://www.edamam.com/food-img/239/2398e80abd77c81317eb3dd2311b00ae.jpg",
  },
  {
    name: "Rice",
    description:"Small white Japanese Rocks",
    photo:
      "https://www.edamam.com/food-img/0fc/0fc9fa8a3e0276198d75b2e259068f8a.jpg",
  },
  {
    name: "Pasta",
    description: "Pasta is an italian invention that can only be properly cooked by an individual of italian heritage",
    photo:
      "https://www.edamam.com/food-img/882/8825533f89f0fde6397f43b22ef20cfe.jpg",
  },
  {
    name: "Potato",
    description: "A heavy, hard, white globular plant root that is some how edible",
    photo:
      "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg",
  },
  {
    name: "Carrot",
    description:"The perfect snowman nose",
    photo:
      "https://www.edamam.com/food-img/121/121e33fce0bb9546ed7d060b6c114e29.jpg",
  },
  {
    name: "Bell pepper",
    description:"A pepper that rings when struck",
    photo:
      "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg",
  },
  {
    name: "Broccoli",
    description:"A miniature tree. A summer Cauliflower",
    photo:
      "https://www.edamam.com/food-img/f1a/f1ae69537c4e5970d5311923d2c696c4.jpeg",
  },
  {
    name: "Cauliflower",
    description:"Winter Broccoli",
    photo:
      "https://www.edamam.com/food-img/ca2/ca217d31067dffd35ce1215e7f336bd8.jpg",
  },
  {
    name: "Spinach",
    description:" Popeye's favorite food",
    photo:
      "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg",
  },
  {
    name: "Green beans",
    description:" For an accurate description of green beans, please consult the Bean book that Dan Gross always has on hand",
    photo:
      "https://www.edamam.com/food-img/891/89135f10639878a2360e6a33c9af3d91.jpg",
  },
  {
    name: "Cucumber",
    description:" Often referred to as cukes, these long cylindrical objects make for great dill pickles",
    photo:
      "https://www.edamam.com/food-img/501/5015da0e5fc2b384696b3d949aefef86.jpg",
  },
  {
    name: "Lemon",
    description:"Do you hate your mouth! Try a lemon, its citric sour flavor will surely make you wish you never ate one",
    photo:
      "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg",
  },
  {
    name: "Lime",
    description:"Just a stupid green lemon",
    photo:
      "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg",
  },
  {
    name: "Orange",
    photo: "https://www.edamam.com/food-img/8ea/8ea264a802d6e643c1a340a77863c6ef.jpg",
    description: "Oranges are citrus fruits known for their refreshing taste and high vitamin C content. They are typically round in shape with a bright orange color and a juicy flesh. Oranges are popular for their tangy flavor and are commonly consumed as a snack or used in various culinary applications.",
  },
  {
    name: "Apple",
    photo: "https://www.edamam.com/food-img/42c/42c006401027d35add93113548eeaae6.jpg",
    description: "Apples are crisp and sweet fruits that come in various colors, including red, green, and yellow. They have a round shape and are known for their crunchy texture. Apples are a popular fruit worldwide and are enjoyed both raw and cooked. They are rich in fiber, antioxidants, and vitamin C.",
  },
  {
    name: "Banana",
    photo: "https://www.edamam.com/food-img/9f6/9f6181163a25c96022ee3fc66d9ebb11.jpg",
    description: "Bananas are elongated fruits with a curved shape and a vibrant yellow color when ripe. They have a creamy texture and a sweet taste. Bananas are a great source of potassium, dietary fiber, and vitamins. They are a versatile fruit often eaten as a quick and nutritious snack or used in smoothies, desserts, and baking.",
  },
  {
    name: "Strawberry",
    photo: "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg",
    description: "Strawberries are small, juicy fruits with a bright red color and tiny seeds on their surface. They have a sweet and slightly tart flavor. Strawberries are widely appreciated for their taste and nutritional value. They are often enjoyed fresh, added to fruit salads, used in desserts, or made into preserves and jams.",
  },
  {
    name: "Blueberry",
    photo: "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png",
    description: "Blueberries are small, round berries with a dark blue-purple color. They have a mildly sweet taste with a hint of tartness. Blueberries are rich in antioxidants, vitamins, and minerals. They are commonly eaten fresh, added to cereals, used in baking, or blended into smoothies. Blueberries are also popular in various desserts and sauces.",
  },

  {
    name: "Raspberry",
    photo: "https://www.edamam.com/food-img/a67/a671e604bed03c27259eab176c781e22.jpg",
    description: "Raspberries are small, delicate berries with a sweet and slightly tart flavor. They are known for their vibrant red color and tiny seeds that give them a textured appearance. Raspberries are rich in antioxidants, vitamins, and fiber. They are commonly enjoyed fresh, added to desserts, used in jams and jellies, or incorporated into baked goods.",
  },
  {
    name: "Blackberry",
    photo: "https://www.edamam.com/food-img/b49/b49683595ad4c4565d1bfe05348ef6eb.jpg",
    description: "Blackberries are dark-colored berries with a sweet and tangy taste. They have a distinctive juicy texture and are known for their high nutritional value. Blackberries are packed with antioxidants, vitamins, and fiber. They can be eaten fresh, added to fruit salads, used in pies and pastries, or blended into smoothies.",
  },
  {
    name: "Avocado",
    photo: "https://thumbs.dreamstime.com/z/avocado-18188183.jpg",
    description: "Avocado is a versatile fruit with a creamy texture and a mild, nutty flavor. It has a dark green outer skin and a soft, buttery flesh inside. Avocados are rich in healthy fats, fiber, and various vitamins and minerals. They are commonly used in guacamole, salads, sandwiches, and as a topping for toast.",
  },
  {
    name: "Corn",
    photo: "https://www.edamam.com/food-img/eb5/eb5e11afb9f697720b2de2e0e0e27d8d.jpg",
    description: "Corn, also known as maize, is a cereal grain that comes in various colors, including yellow, white, and bi-colored varieties. It has a sweet and slightly starchy taste. Corn is a staple food in many cuisines and is used in numerous dishes, including soups, salads, stir-fries, and as a side dish. It is a good source of dietary fiber and essential nutrients.",
  },
  {
    name: "Peas",
    photo: "https://www.edamam.com/food-img/5ed/5ed641d646c028598a90bdb9ece34fc8.jpg",
    description: "Peas are small, spherical green vegetables that are sweet and tender in flavor. They are commonly eaten fresh or cooked and are a popular ingredient in various cuisines. Peas are rich in vitamins, minerals, and dietary fiber. They can be enjoyed as a side dish, added to salads, used in soups and stews, or incorporated into pasta and rice dishes.",
  },
  {
    name: "Green onion",
    photo: "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg",
    description: "Green onions, also known as scallions or spring onions, are long, slender vegetables with a mild onion flavor. They have green leaves and white bulbs. Green onions are widely used in various cuisines as a garnish, flavoring agent, or ingredient in salads, stir-fries, soups, and sauces. They add a fresh and aromatic touch to dishes.",
  },
  {
    name: "Cilantro",
    photo: "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg",
    description: "Cilantro, also known as coriander leaves, is an herb with delicate, feathery green leaves and a distinct flavor. It is commonly used in various cuisines, particularly in Latin American, Indian, and Southeast Asian dishes. Cilantro adds a fresh, citrusy, and slightly spicy taste to salads, salsas, curries, soups, and many other recipes.",
  },
  {
    name: "Basil",
    photo: "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg",
    description: "Basil is a fragrant herb with vibrant green leaves and a sweet, peppery flavor. It is widely used in Mediterranean, Italian, and Thai cuisines. Basil leaves are popularly used in pesto sauce, salads, pasta dishes, and as a garnish. It adds a delightful aroma and a touch of freshness to a variety of recipes.",
  },
  {
    name: "Oregano",
    photo: "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg",
    description: "Oregano is a culinary herb with small, pungent leaves and a robust, earthy flavor. It is commonly used in Mediterranean and Italian cuisines, particularly in tomato-based dishes, pizzas, pasta sauces, and grilled meats. Oregano adds a savory and aromatic quality to recipes and is often used dried or fresh.",
  },
  {
    name: "Thyme",
    photo: "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg",
    description: "Thyme is a fragrant herb with tiny leaves and a warm, earthy flavor. It is widely used in Mediterranean, French, and Middle Eastern cuisines. Thyme leaves are used in soups, stews, roasted meats, marinades, and various vegetable dishes. It adds a distinctive aroma and a hint of sweetness to savory recipes.",
  },
  {
    name: "Rosemary",
    photo: "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg",
    description: "Rosemary is an aromatic herb with needle-like leaves and a piney, woody flavor. It is commonly used in Mediterranean and Italian cuisines, particularly in roasted meats, potatoes, bread, and marinades. Rosemary adds a fragrant and robust taste to dishes and is often used dried or fresh.",
  },
  {
    name: "Sage",
    photo: "https://www.edamam.com/food-img/509/50984580e9aad4b4ddd5b7ed45a64bf4.jpg",
    description: "Sage is an aromatic herb with gray-green leaves and a savory, slightly peppery flavor. It is commonly used in Mediterranean and European cuisines, particularly in roasted meats, sausages, stuffings, and savory baked goods. Sage adds a distinctive and earthy taste to dishes and is often used dried or fresh.",
  },
  {
    name: "Bay leaf",
    photo: "https://www.edamam.com/food-img/0f9/0f9f5f95df173e9ffaaff2977bef88f3.jpg",
    description: "Bay leaf is an aromatic leaf commonly used as a seasoning in various cuisines, including Mediterranean, Indian, and Caribbean. It has a subtle, herbal flavor with a hint of floral and balsamic notes. Bay leaves are typically used in soups, stews, sauces, and braised dishes to add depth and complexity to the flavors.",
  },
  {
    name: "Cumin",
    photo: "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg",
    description: "Cumin is a warm and aromatic spice with a distinctive nutty and earthy flavor. It is commonly used in Mexican, Indian, Middle Eastern, and North African cuisines. Cumin seeds or ground cumin are used in spice blends, curry powders, soups, stews, and various meat and vegetable dishes. Cumin adds a rich and smoky taste to recipes.",
  },
  {
    name: "Paprika",
    photo: "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg",
    description: "Paprika is a spice made from dried and ground red bell peppers or chili peppers. It has a vibrant red color and a mild, sweet, and slightly smoky flavor. Paprika is commonly used in Hungarian, Spanish, and Eastern European cuisines. It adds color and a subtle tang to dishes, particularly in stews, soups, rice dishes, and roasted meats.",
  },
  {
    name: "Chili powder",
    photo: "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg",
    description: "Chili powder is a spice blend made from dried and ground chili peppers, along with other complementary spices like cumin, garlic powder, and oregano. It has a moderate to hot level of spiciness and a robust, smoky flavor. Chili powder is commonly used in Mexican, Tex-Mex, and Southwestern cuisines to add heat and complexity to dishes, including chili con carne, tacos, and enchiladas.",
  },
  {
    name: "Curry powder",
    photo: "https://www.edamam.com/food-img/9ce/9ce02a2887385fd2adaec8dd8adcf9c5.jpg",
    description: "Curry powder is a spice blend that varies in flavor and heat level depending on the region and recipe. It typically includes a combination of ground spices such as turmeric, coriander, cumin, fenugreek, and chili powder",
  },
  {
    name: "Ginger",
    photo: "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg",
    description: "Ginger is a pungent and aromatic root commonly used in Asian and Indian cuisines. It has a spicy, warm, and slightly sweet flavor. Ginger can be used fresh, dried, or ground, and it adds a zesty kick to dishes. It is often used in stir-fries, curries, marinades, teas, and baked goods.",
  },
  {
    name: "Soy sauce",
    photo: "https://www.edamam.com/food-img/4bc/4bccc4c294a8dddb62020c62935e6fd8.jpg",
    description: "Soy sauce is a savory and salty condiment made from fermented soybeans, wheat, water, and salt. It is a staple in Asian cuisine and adds depth and umami flavor to dishes. Soy sauce comes in various types, such as light, dark, and tamari, with different levels of saltiness and richness. It is used in stir-fries, marinades, dipping sauces, and as a seasoning.",
  },
  {
    name: "Vinegar",
    photo: "https://www.edamam.com/food-img/5f6/5f69b84c399d778c4728e9ab4f8065a2.jpg",
    description: "Vinegar is a sour liquid made through the fermentation of various sources, such as grapes, apples, or rice. It is used in cooking, baking, and dressing. Vinegar adds acidity and tanginess to dishes and can enhance flavors. It is commonly used in salad dressings, marinades, pickling, and sauces.",
  },
  {
    name: "Worcestershire sauce",
    photo: "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg",
    description: "Worcestershire sauce is a tangy and savory condiment with a complex flavor profile. It is made from fermented anchovies, vinegar, molasses, tamarind, and various spices. Worcestershire sauce adds depth, umami, and a hint of sweetness to dishes. It is commonly used in marinades, sauces, gravies, and Bloody Mary cocktails.",
  },
  {
    name: "Mustard",
    photo: "https://www.edamam.com/food-img/e23/e238f2e4cfa6aa1a30f46dc73e7344eb.jpg",
    description: "Mustard is a condiment made from ground mustard seeds, water, vinegar, and other optional ingredients. It has a pungent, tangy, and slightly spicy flavor. Mustard comes in various forms, including yellow, Dijon, and whole grain, each with its own distinct taste and texture. It is used in dressings, marinades, sandwiches, and as a flavoring in cooking.",
  },
  {
    name: "Ketchup",
    photo: "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg",
    description: "Ketchup is a popular condiment made from tomatoes, vinegar, sugar, and various seasonings. It has a sweet and tangy flavor and is commonly used as a topping or dipping sauce. Ketchup pairs well with burgers, fries, hot dogs, and other savory dishes.",
  },
  {
    name: "Mayonnaise",
    photo: "https://www.edamam.com/food-img/577/577308a0422357885c94cc9b5f1f1862.jpg",
    description: "Mayonnaise is a creamy condiment made from egg yolks, oil, vinegar or lemon juice, and seasonings. It has a rich and smooth texture and a tangy flavor. Mayonnaise is used as a spread for sandwiches, a base for salad dressings, and an ingredient in various sauces and dips.",
  },
  {
    name: "Hot sauce",
    photo: "https://www.edamam.com/food-img/946/946c38a4c278da4361d2615d653d685a.jpg",
    description: "Hot sauce is a spicy condiment made from chili peppers, vinegar, and other ingredients. It adds heat, flavor, and a kick to dishes. Hot sauce comes in various levels of spiciness and flavor profiles, ranging from mild to extremely hot. It is used to enhance the taste of foods like tacos, wings, and soups.",
  },
  {
    name: "Salsa",
    photo: "https://www.edamam.com/food-img/205/205d9e349c3b7e60d4886c5ab4e27a92.jpg",
    description: "Salsa is a flavorful sauce made from tomatoes, onions, peppers, herbs, and spices. It has a fresh and tangy taste with varying degrees of spiciness. Salsa is commonly used as a dip for tortilla chips, a topping for tacos and burritos, or as a condiment to add flavor to various dishes.",
  },
  {
    name: "Pesto",
    photo: "https://www.edamam.com/food-img/6e3/6e3933ee3f66304462b42f766329633c.jpg",
    description: "Pesto is a vibrant green sauce made from basil, garlic, pine nuts, olive oil, Parmesan cheese, and sometimes other ingredients like spinach or parsley. It has a fresh and herbaceous flavor. Pesto is commonly used as a pasta sauce, a spread for sandwiches, or a topping for grilled meats and vegetables.",
  },
  {
    name: "Honey",
    photo: "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg",
    description: "Honey: The Sweet Nectar of the Beehive, crafted by nature's little helpers. With its golden hue and delightful sweetness, Honey adds a touch of magic to your favorite treats. Whether drizzled over pancakes, stirred into tea, or used as a natural sweetener, Honey brings a taste that's simply bee-licious!",
  },
  {
    name: "Maple syrup",
    photo: "https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg",
    description: "Maple syrup: The Liquid Gold harvested from enchanted forests. With its rich amber color and distinct flavor, Maple syrup conjures visions of crisp autumn mornings and cozy log cabins. Let this sweet elixir cascade over your pancakes, waffles, or French toast, and embark on a deliciously whimsical journey!",
  },
  {
    name: "Molasses",
    photo: "https://www.edamam.com/food-img/800/800f6133e1db5bef8332290e0b23b2cc.jpg",
    description: "Molasses: The Dark Potion extracted from the depths of sugarcane. With its deep, velvety texture and robust flavor, Molasses imparts a touch of enchantment to your culinary creations. From gingerbread to barbecue sauces, let this bewitching syrup weave its magic and add a hint of mysterious sweetness to your dishes!",
  },
  {
    name: "Balsamic vinegar",
    photo: "https://www.edamam.com/food-img/90a/90a1f211768e166ecfff19e8b4747498.jpg",
    description: "Balsamic vinegar: The Elixir of the Vineyard, aged to perfection in oak barrels. With its dark, lustrous color and complex flavors, Balsamic vinegar adds a touch of elegance to your salads, marinades, and glazes. Let its tangy notes and hints of sweetness transport your taste buds to a vineyard in the Italian countryside!",
  },
  {
    name: "Red wine vinegar",
    photo: "https://www.edamam.com/food-img/dc8/dc8e998b32b8d45ba15c1b1e6711e958.jpg",
    description: "Red wine vinegar: The Essence of Fermented Grapes, aged to unlock its vibrant flavors. With its robust acidity and deep red color, Red wine vinegar adds a zesty and tangy twist to your dressings, sauces, and pickled delights. Let its spirited character and wine-infused charm elevate your culinary adventures!",
  },
  {
    name: "White wine vinegar",
    photo: "https://www.edamam.com/food-img/0d2/0d278348c2429aab1b76043eaf0ef6f5.png",
    description: "White wine vinegar: A Taste of Withered Dreams, distilled from the forgotten hopes of grapes. With its pale, lifeless hue and sharp tang, White wine vinegar exudes a sense of melancholy. Its sour notes and lost potential make it a poignant companion for dressings, marinades, and culinary fare that yearn for a touch of sorrow.",
  },
  {
    name: "Apple cider vinegar",
    photo: "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg",
    description: "Apple cider vinegar: The Essence of Discarded Apples, steeped in bittersweetness. With its amber tears and tart taste, Apple cider vinegar carries a heavy heart. Its tangy undertones and forgotten orchard nostalgia add a dash of sorrow to salads, pickles, and vinaigrettes, reminding us of the fleeting nature of life's sweetness.",
  },
  {
    name: "Lemon juice",
    photo: "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg",
    description: "Lemon juice: The Citrus Elixir of Sorrow, extracted from the tears of the lemon tree. With its vibrant yellow hue turned pale and its acidic bite, Lemon juice carries a heavy burden. Its tangy embrace and bittersweet zest add a touch of melancholy to cocktails, sauces, and desserts, evoking the taste of sorrows untold.",
  },
  {
    name: "Lime juice",
    photo: "https://www.edamam.com/food-img/8f0/8f0c10eb3dbf476a05e61018e76ea220.jpg",
    description: "Lime juice: The Bitter Elation of Lost Limes, squeezed from faded memories. With its greenish tinge of melancholy and its puckering sourness, Lime juice carries a burden of sadness. Its zesty allure and astringent flavor bring a hint of sorrow to beverages, marinades, and culinary creations, a reminder of life's tangy disappointments.",
  },
  {
    name: "Fish sauce",
    photo: "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg",
    description: "Fish sauce: A briny elixir drawn from the depths of the sea, its pungent aroma reminiscent of salty breezes and the untamed ocean. This amber nectar possesses a bold umami essence, evoking the rugged spirit of fishermen and the primal allure of the sea. With a mere drop, it transforms ordinary dishes into bold and savory delights, capturing the essence of the ocean's untamed heart.",
  },
  {
    name: "Coconut milk",
    photo: "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG",
    description: "Coconut milk: A creamy elixir extracted from the tropical bounty, its velvety texture and sweet essence transport you to sun-drenched shores and swaying palm trees. Like a taste of paradise in every sip, it brings a rich and luscious touch to culinary creations. Whether in curries, desserts, or refreshing beverages, let this milk of the coconut awaken your senses and transport you to the tropics.",
  },
  {
    name: "Almonds",
    photo: "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg",
    description: "Almonds: These rugged nuts, encased in a resilient shell, bear the essence of perseverance and resilience. With their earthy crunch and delicate sweetness, they bring a touch of fortitude to both sweet and savory dishes. Like a whispered promise of nourishment and strength, let these almonds accompany your culinary adventures, adding a touch of natural elegance to each bite.",
  },
  {
    name: "Walnuts",
    photo: "https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg",
    description: "Walnuts: These sturdy nuts, encased in a rugged shell, harbor a rich and bitter-sweet flavor that bespeaks both strength and complexity. Like nature's own treasure, they offer a delicate balance of earthy richness and a subtle tinge of bitterness. With each crack, let the nut reveal its inner beauty and bring depth to your culinary creations, a taste of life's enigmatic tapestry.",
  },
  {
    name: "Pecan",
    photo: "https://www.edamam.com/food-img/42f/42ff4c36d4d0b4e8069604c97af1cfef.jpg",
    description: "Pecan: A native nut of the land, blessed with a buttery richness and a rustic charm that harks back to untamed wilderness and hearty gatherings. With its smooth texture and nutty sweetness, it adds a touch of southern elegance to both sweet treats and savory dishes. Let this humble nut weave its southern spell, reminding you of sunlit orchards and the warmth of hospitality.",
  },
  {
    name: "Pistachio",
    photo: "https://www.edamam.com/food-img/1ed/1eda10468a9c3df61f8208fe156e832d.jpg",
    description: "Pistachio: I am a vibrant green gem, encased in a sturdy shell that guards my delicate flesh. Crack me open to reveal my irresistible, buttery richness. With a hint of salt to awaken your taste buds, I offer a satisfying crunch that leaves you craving for more. Let my emerald allure and delectable flavor transport you to a world of indulgence and pure delight.",
  },
  {
    name: "Cashew",
    photo: "https://www.edamam.com/food-img/d4b/d4bc3f8024cac35e2039ef5ead328e11.jpg",
    description: "Cashew: I am a curved wonder, adorned with a smooth and creamy texture that melts on your tongue. Beneath my golden exterior lies a tender and rich nutmeat that whispers of subtle sweetness. Indulge in my buttery embrace and savor the delicate balance of flavors that I bring. A true delight for your palate, I invite you to experience the sheer elegance of my presence.",
  },
  {
    name: "Peanut",
    photo: "https://www.edamam.com/food-img/6f4/6f41e31c53bb58cc1b7331d0764963f7.jpg",
    description: "Peanut: I am a humble legume, cherished by many for my versatility and satisfying crunch. Encased in a rugged shell, I harbor a treasure trove of flavor that ranges from earthy to nutty sweetness. Whether roasted, salted, or ground into a creamy spread, I offer a delightful experience that captivates both young and old. Allow me to accompany your snacking moments and infuse them with simple yet undeniable joy.",
  },
  {
    name: "Sunflower seeds",
    photo: "https://www.edamam.com/food-img/c03/c035107b6716331396e91f7c2c0f2a04.jpg",
    description: "Sunflower seeds: I am the embodiment of nature's abundance, a cluster of tiny treasures nestled within the heart of a vibrant sunflower. With a robust and earthy flavor, I invite you to crack my shell and discover the reward within. Roasted to perfection and lightly salted, I offer a satisfyingly crunchy experience that enlivens your snacking moments. Take a handful and let the essence of the sunflower embrace your taste buds.",
  },
  {
    name: "Pumpkin seeds",
    photo: "https://www.edamam.com/food-img/fbd/fbd8c30b003fa93777ffaa2bcdd58db0.jpg",
    description: "Pumpkin seeds: Born from the depths of a pumpkin, I am a small yet mighty seed, encapsulating the essence of autumn's harvest. With a robust and nutty flavor, I offer a delightful crunch that captivates your senses. Roasted to perfection and lightly seasoned, I bring a touch of savory indulgence to your snacking rituals. Embrace my rustic charm and let me accompany you on your culinary adventures.",
  },
  {
    name: "Sesame seeds",
    photo: "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg",
    description: "Sesame seeds: These tiny seeds pack a flavorful punch and add a delightful crunch to your dishes. With their delicate nutty taste and slightly toasted aroma, sesame seeds are a versatile ingredient that can elevate both sweet and savory recipes. Sprinkle them over salads, stir-fries, or use them as a crust for baked goods to enjoy their unique texture and rich taste.",
  },
  {
    name: "Flax seeds",
    photo: "https://www.edamam.com/food-img/e9b/e9bd9cc62d0dbe0753911e295a0ba0ca.jpg",
    description: "Flax seeds: These small but mighty seeds are packed with nutritional benefits. Known for their high content of omega-3 fatty acids and fiber, flax seeds are a great addition to your diet. Incorporate them into your smoothies, sprinkle them over yogurt or oatmeal, or use them as an egg substitute in baking. Discover the nutty flavor and healthful properties of flax seeds in your favorite recipes.",
  },
  {
    name: "Chia seeds",
    photo: "https://www.edamam.com/food-img/bcc/bcc6e6bf3175772ad00b414636467257.jpg",
    description: "Chia seeds: These tiny seeds may be small, but they pack a nutritional punch. Rich in fiber, protein, and omega-3 fatty acids, chia seeds are a superfood that can be easily incorporated into your meals. Add them to smoothies, puddings, or make a delicious chia seed pudding for a healthy and satisfying treat. Embrace the versatility and health benefits of chia seeds in your culinary creations.",
  },
  {
    name: "Quinoa",
    photo: "https://www.edamam.com/food-img/b62/b622239a214b3bd9f63c8e93e6e9cde6.jpg",
    description: "Quinoa: This ancient grain is renowned for its nutritional value and versatility in the kitchen. With its light and fluffy texture and nutty flavor, quinoa is a perfect accompaniment to your main dishes. Use quinoa as a base for salads, as a side dish, or even as the star ingredient in creative main courses. Explore new recipes and discover the versatility of quinoa in your cooking.",
  },
  {
    name: "Couscous",
    photo: "https://www.edamam.com/food-img/b27/b273b8089a4447e46e66d20423b386cb.jpg",
    description: "Couscous: This fine semolina grain is a staple in North African cuisine. With its light and fluffy texture, couscous lends itself to a wide variety of preparations. Whether used as a base for main dishes or as part of salads and side dishes, couscous adds a pleasant texture and pairs well with different flavors. Try new recipes and explore the versatility of couscous in your culinary adventures.",
  },
  {
    name: "Bulgur",
    photo: "https://www.edamam.com/food-img/efd/efdae488ee5023e28e7f128e61b261f7.jpg",
    description: "Bulgur is a nutritious grain that is commonly used in Middle Eastern cuisine. It has a nutty flavor and a slightly chewy texture. Bulgur is versatile and can be used in various dishes, such as pilafs, salads, and stuffings. It is a good source of fiber and provides essential minerals and vitamins. With its wholesome taste and hearty nature, bulgur adds depth and richness to meals, making it a popular choice for those seeking nourishing and flavorful options.",
  },
  {
    name: "Lentils",
    photo: "https://www.edamam.com/food-img/d5a/d5aa5bc5a3142f3179f31310054a56e6.jpg",
    description: "Lentils are small legumes that are packed with nutrients. They come in various colors, such as green, brown, and red, each with its own distinct flavor. Lentils are a great source of plant-based protein and are rich in fiber, iron, and folate. They are commonly used in soups, stews, and curries, where they add a hearty texture and depth of flavor. Lentils are known for their quick cooking time, making them a convenient and nutritious choice for meals. Whether you're looking for a comforting bowl of lentil soup or a protein-packed addition to your salads, lentils are a versatile ingredient that brings both taste and nutritional benefits to your plate.",
  },
  {
    name: "Chickpeas",
    photo: "https://www.edamam.com/food-img/520/520c62055515f730b8947e0e445fd2be.jpg",
    description: "Chickpeas, also known as garbanzo beans, are versatile legumes that are widely used in various cuisines around the world. They have a nutty flavor and a creamy texture. Chickpeas are a rich source of plant-based protein, fiber, and essential minerals. They can be cooked and enjoyed in numerous ways, including in salads, soups, stews, and curries. Chickpeas are also the main ingredient in popular dishes like hummus and falafel. With their nutritional value and delicious taste, chickpeas are a go-to ingredient for both vegetarian and omnivorous diets, adding a hearty and satisfying element to a wide range of recipes.",
  },
  {
    name: "Black beans",
    photo: "https://nuts.com/images/rackcdn/ed910ae2d60f0d25bcb8-80550f96b5feb12604f4f720bfefb46d.ssl.cf1.rackcdn.com/7536_Organic-Black-B-gsgJtA9W-zoom.jpg",
    description: "Black beans are a type of legume with a rich flavor and a velvety texture. They are commonly used in Latin American, Caribbean, and Southwestern cuisines. Black beans are a good source of protein, fiber, and various vitamins and minerals. They are often cooked and enjoyed in dishes such as soups, stews, rice and bean bowls, and salads. Black beans have a distinct taste that adds depth and complexity to meals. Whether you're making a hearty black bean chili or a flavorful black bean salad, these beans bring a satisfying and nutritious element to your culinary creations.",
  },
  {
    name: "Kidney beans",
    photo: "https://www.edamam.com/food-img/b38/b38474ab11c81e155df0ef5b7120bc27.jpg",
    description: "Kidney beans are large, kidney-shaped legumes that are known for their robust flavor and creamy texture. They are commonly used in a variety of cuisines, including chili, soups, stews, and salads. Kidney beans are a good source of plant-based protein, fiber, and essential minerals. Their hearty and satisfying nature makes them a popular choice for vegetarian and vegan meals. Whether you're making a comforting bowl of red beans and rice or adding them to a vibrant bean salad, kidney beans bring a delightful taste and nutritional value to your dishes.",
  },
  {
    name: "Cannellini beans",
    photo: "https://www.edamam.com/food-img/221/221986526e196ef4b38fd70da8d29fd6.jpg",
    description: "Cannellini beans, also known as white kidney beans, are large and creamy legumes that have a mild and nutty flavor. They are commonly used in Italian cuisine, particularly in dishes such as soups, stews, and bean salads. Cannellini beans are a good source of protein, fiber, and essential nutrients. They have a smooth and buttery texture that pairs well with various herbs, spices, and ingredients. Whether you're making a comforting pasta e fagioli or a flavorful bean dip, cannellini beans bring a delightful taste and texture to your culinary creations.",
  },
  {
    name: "Tofu",
    photo: "https://www.edamam.com/food-img/b6a/b6ae13c3cfe37e16f820840f90231bff.jpg",
    description: "Tofu, also known as bean curd, is a versatile and popular ingredient in vegetarian and vegan cuisine. It is made from soybeans and has a mild and neutral flavor, allowing it to absorb the flavors of other ingredients in a dish. Tofu comes in various textures, such as soft, firm, and extra firm, each suitable for different cooking methods. It is a good source of plant-based protein and contains essential amino acids. Tofu can be stir-fried, baked, grilled, or added to soups and salads. Its versatility makes it a great option for those looking to incorporate plant-based proteins into their meals.",
  },
  {
    name: "Tempeh",
    photo: "https://www.edamam.com/food-img/139/139a0735a1525719ce0da6e978193e8b.jpg",
    description: "Tempeh is a traditional Indonesian soy product that is made by fermenting cooked soybeans. It has a dense texture and a nutty flavor. Tempeh is a good source of plant-based protein, fiber, and essential nutrients. It is often used as a meat substitute in vegetarian and vegan dishes. Tempeh can be marinated, grilled, baked, or crumbled into various recipes. Its firm texture and unique taste make it a popular choice for stir-fries, sandwiches, and salads. With its nutritional profile and versatility, tempeh offers a delicious and satisfying option for those seeking plant-based alternatives.",
  },
  {
    name: "Seitan",
    photo: "https://www.edamam.com/food-img/857/857ca8dd5c323ecc8e5ea9afe39f283f.jpg",
    description: "Seitan, also known as wheat meat or wheat gluten, is a popular meat substitute often used in vegetarian and vegan cuisine. It is made from gluten, the protein found in wheat, and has a chewy and meat-like texture. Seitan can be flavored and seasoned in various ways, making it a versatile ingredient in dishes such as stir-fries, stews, and sandwiches. It is a good source of plant-based protein and contains essential amino acids. With its ability to mimic the texture of meat, seitan provides a satisfying and protein-rich option for those following a plant-based diet.",
  },
  {
    name: "Chicken broth",
    photo: "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg",
    description: "Chicken broth is a flavorful liquid made by simmering chicken bones, vegetables, herbs, and spices. It is commonly used as a base for soups, stews, sauces, and risottos. Chicken broth adds depth and richness to dishes, enhancing their flavors. It can be made from scratch using homemade chicken stock or purchased as a ready-to-use product. Whether you're looking to create a comforting bowl of chicken noodle soup or adding a savory touch to your favorite recipes, chicken broth brings a delicious and aromatic element to your culinary creations.",
  },
  {
    name: "Beef broth",
    photo: "https://www.edamam.com/food-img/428/4284513ddbf46e51f0f33566c0d61715.jpg",
    description: "Beef broth is a savory liquid made by simmering beef bones, vegetables, herbs, and spices. It is commonly used as a base for soups, stews, sauces, and gravies. Beef broth imparts a rich and hearty flavor to dishes, adding depth and complexity. It can be made from scratch using homemade beef stock or purchased as a pre-made product. Whether you're creating a comforting bowl of beef stew or enhancing the flavors of your favorite recipes, beef broth brings a robust and savory element to your culinary creations.",
  },
  {
    name: "Vegetable broth",
    photo: "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg",
    description: "Vegetable broth is a flavorful liquid made by simmering a variety of vegetables, herbs, and spices. It is commonly used as a base for vegetarian and vegan soups, stews, sauces, and risottos. Vegetable broth adds a delicate and savory taste to dishes, enhancing their flavors. It can be made from scratch using a combination of vegetables or purchased as a convenient ready-to-use product. Whether you're looking to create a comforting vegetable soup or adding a flavorful touch to your favorite recipes, vegetable broth brings a nourishing and aromatic element to your culinary creations.",
  },
  {
    name: "Coconut oil",
    photo: "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg",
    description: "Coconut oil is a versatile and popular cooking oil derived from the meat of mature coconuts. It has a mild and pleasant",
  },
  {
    name: "Canola oil",
    photo: "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg",
    description: "Canola oil, the superhero of oils, swoops in to save the day with its mild flavor and versatility. Derived from the seeds of the canola plant, this oil is the Clark Kent of the kitchen, blending seamlessly into any recipe without stealing the spotlight. Whether you're sautéing, frying, or baking, canola oil keeps your food moist and golden, like a sun-kissed superhero. With its high smoke point, it battles against burnt disasters, leaving your taste buds victorious and your dishes full of flavor. Embrace the power of canola oil and let it be your trusty sidekick in the culinary world!",
  },
  {
    name: "Vegetable oil",
    photo: "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg",
    description: "Vegetable oil, the invisible magician of the kitchen, effortlessly makes your dishes disappear into deliciousness. Extracted from various plants, this oil possesses the power to transform ordinary ingredients into culinary wonders. It dances through the pan, ensuring a smooth and even cooking experience, while keeping your food moist and delectable. Like a chameleon, it adapts to any cuisine, seamlessly blending flavors without stealing the show. Whether you're frying, roasting, or creating mouthwatering dressings, vegetable oil is the secret ingredient that adds a touch of magic to your culinary adventures!",
  },
  {
    name: "Red wine",
    photo: "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG",
    description: "Red wine, the mischievous jester of beverages, adds a playful touch to your evenings and tickles your taste buds with delight. Derived from the juiciest grapes and aged to perfection, this crimson elixir holds the power to turn any gathering into a festive celebration. With its bold and complex flavors, it dances across your palate, leaving hints of berries, oak, and a touch of mischief. As it swirls in your glass, it whispers stories of vineyards and ancient traditions. So raise your glass and let the red wine work its enchanting magic, making ordinary moments extraordinary!",
  },
  {
    name: "White wine",
    photo: "https://www.edamam.com/food-img/f0a/f0a53cab32afc5a492cd80692c519491.jpg",
    description: "White wine, the charming charmer of libations, arrives like a breath of fresh air, ready to whisk you away on a delightful journey. Crafted from the finest grapes and kissed by sunshine, this golden nectar is a refreshing oasis on a warm summer's day. Its crisp and vibrant personality dances on your tongue, enchanting you with notes of citrus, apples, and a touch of sophistication. Whether you're sipping it on a terrace or pairing it with your favorite seafood dish, white wine is the elegant companion that elevates any occasion to a level of pure sophistication. So uncork a bottle, raise your glass, and let the white wine weave its magic, turning ordinary moments into extraordinary memories!",
  },
];
module.exports = groceryData;
