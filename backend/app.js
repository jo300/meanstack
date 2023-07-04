const express = require("express");
const app = express();
const db = require("./db");
const port = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());

const AuthController = require("./controler/authController");
const ProductController = require("./controler/productController");
app.use("/api/auth", AuthController);
app.use("/api/product", ProductController);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
