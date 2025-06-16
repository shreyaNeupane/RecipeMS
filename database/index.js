const mongoose = require("mongoose");
const connectionString =
  "mongodb+srv://shreyaneupane49:recipe@cluster0.6vx7my1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToDatabase() {
  await mongoose.connect(connectionString);
  console.log("Connected to Database");
}
module.exports = connectToDatabase;
