const mongoose = require("mongoose");
const cartSchema = new mongoose.Schema({
  productTitle: String,
  productCategory: String,
  price: Number,
  description: String,
});

mongoose.model("cart", productSchema);
module.exports = mongoose.model("cart");
