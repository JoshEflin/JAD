const axios = require("axios");
require("dotenv").config();
const id = process.env.API_ID;
const key = process.env.API_KEY;
const foodStr = "chicken";

class Recipe {
  constructor(hit) {
    this.label = hit.label;
    this.image = hit.image;
    this.healthLabels = hit.healthLabels;
    this.calories = hit.calories;
    this.cautions = hit.cautions;
    this.ingredients = hit.ingredients;
    this.mealType = hit.mealType;
    this.dishType = hit.dishType;
    // this.totalNutrients = hit.totalNutrients;
  }
}

async function getRecipe(foodStr) {
  // console.log(foodStr)
  console.log(id);
  console.log(key);
  const edamamData = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${foodStr}&app_id=${id}&app_key=${key}`
  );
  const hits = edamamData.data.hits;
  const recipes = hits.map((hit) => {
    // console.log(hit)
      return new Recipe(hit.recipe);
  });
  return recipes
}
module.exports = getRecipe;
