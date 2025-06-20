const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const recipeSchema = new mongoose.Schema({
  recipeTitle: {
    type: String,
    unique: true,
    required : true,
  },
  timeRequired: {
    type: Number,
  },
  servings: {
    type: Number,
  },
  ingredients: {
    type: String,
  },
  instructions: {
    type: String,
  },
  image:{
    type : String,
  }

});
// where we perform operation = defining table name and columns
const Recipe = mongoose.model("Recipe", recipeSchema);
module.exports = Recipe;
