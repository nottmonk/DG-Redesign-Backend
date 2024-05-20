const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    id: Number,
    title: String,
    price: Number,
    category: String,
    stock: Number,
    images: [String],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
