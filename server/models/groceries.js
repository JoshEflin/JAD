const mongoose = require('mongoose');

const ingredientSchema = new mongoose.SchemaTypeOptions({
    name:{type:String, required:true},
    price:{type:Number, required:true},
    stock: {type:Number, required:true}

})

const Ingredient = mongoose.model('Ingredient', ingredientSchema);


module.exports = {Ingredient}