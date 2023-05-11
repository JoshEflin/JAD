const connection = require("../config/connection");
const { Ingredient } = require("../models/groceries");
const groceryData = require("./data");

connection.on("error", (err) => err);
//  for every item in groceryData, set a random price and a random stock

const seedData = groceryData.map(({ name, photo, description }) => {
  const ingredientObj = {
    name: name.toUpperCase(),
    price: Math.floor(Math.random() * 25),
    stock: Math.floor(Math.random() * 15),
    photo: photo,
    description: description,
  };
  return ingredientObj;
});
// console.log(seedData)

connection.once("open", async () => {
  console.log("connected to DB");
  await Ingredient.deleteMany({});
  await Ingredient.insertMany(seedData)
    .then((result) => console.log("added new entry", result))
    .catch((err) => console.error(err));
  process.exit(0);
});
