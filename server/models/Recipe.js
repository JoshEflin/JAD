const { Schema } = require("mongoose");

const recipeSchema = new Schema({
  uri: {
    type: String,
  },

  label: {
    type: String,
    required: true,
  },

  image: {
    type: String,
    required: true,
  },
  healthLabels: [
    {
      type: String,
    },
  ],
  cautions: [
    {
      type: String,
    },
  ],
  ingredients: [
    {
      type: String,
      required: true,
    },
  ],
  calories: {
    type: Number,
  },
  mealType: [
    {
      type: String,
    },
  ],
  dishtype: [
    {
      type: String,
    },
  ],
  totalNutrients: { type: String },
});

module.exports = recipeSchema;
