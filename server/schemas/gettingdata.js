const axios = require("axios");
const { Ingredient } = require("../models/groceries");
require("dotenv").config();
const id = process.env.API_ID;
const key = process.env.API_KEY;

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
  }
}

async function apiCall(foodStr) {
  const edamamData = await axios.get(
    `https://api.edamam.com/api/recipes/v2?type=public&q=${foodStr}&app_id=${id}&app_key=${key}`,
  );
  const hits = edamamData.data.hits;
  // grab each recipe from Edamam API and create a new in instance of Recipe
  const recipes = hits.map((hit) => {
    return new Recipe(hit.recipe);
  });
  return recipes;
}

module.exports = { apiCall };
