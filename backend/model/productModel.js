const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  productTitle: String,
  productCategory: String,
  price: Number,
  description: String,
});

mongoose.model("product", productSchema);
module.exports = mongoose.model("product");
