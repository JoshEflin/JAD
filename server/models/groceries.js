const { Schema, model } = require("mongoose");

const ingredientSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  photo: { type: String },
  description: { type: String },
});
ingredientSchema.virtual("inStock").get(function () {
  return this.stock > 0;
});
const Ingredient = model("Ingredient", ingredientSchema);

module.exports = { Ingredient };
