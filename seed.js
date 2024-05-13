require("dotenv").config();
const fs = require("fs");
const Product = require("./models/Product");
console.log(Product);
const { default: mongoose } = require("mongoose");
require("./config/db.connection");

const rawData = fs.readFileSync("DummyData");
const products = JSON.parse(rawData);

seedDatabase();

async function seedDatabase() {
  try {
    await Product.insertMany(products.products);
    console.log("Database seeded succesfully");
  } catch (error) {
    console.log("Error Seeding database", error);
  } finally {
    mongoose.connection.close();
  }
}
