const express = require("express");
const connectToDatabase = require("./database");
const Recipe = require("./model/recipeModel");
const app = express();
connectToDatabase();

// VVI
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Sucess",
  });
});

//creating new recipe
app.post("/recipe", async (req, res) => {
  const { recipeTitle, timeRequired, servings, ingredients, instructions } =
    req.body;
  await Recipe.create({
    recipeTitle,
    timeRequired,
    servings,
    ingredients,
    instructions,
  });
  res.json({
    message: "recipe created sucessfully",
  });
});

//getting all recipes
app.get("/recipe", async (req, res) => {
  const recipe = await Recipe.find();
  res.status(200).json({
    message: "recipe fetched sucessfully",
    data: recipe,
  });
});

//single read
app.get("/recipe/:id", async (req, res) => {
  const id = req.params.id;
  const recipe = await Recipe.findById(id );
  res.status(200).json({
    message: "Single recipe fetched sucessfully",
    data: recipe,
  });
});

app.listen(3000, () => {
  console.log("Nodejs server has started at port 3000");
});
