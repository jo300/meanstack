const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const config = require("../config");
const Product = require("../model/productModel");
let mongo = require("mongodb");

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.get("/getAllproducts", (req, res) => {
  Product.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

router.post("/createProduct", (req, res) => {
  console.log(req.body.price);
  console.log(req.body.productCategory);

  Product.create(
    {
      productTitle: req.body.productTitle,
      productCategory: req.body.productCategory,
      price: req.body.price,
      description: req.body.description,
    },
    (err, data) => {
      if (err) return res.send(err);
      res.send("Product Creation Successfull");
    }
  );
});

router.put("/updateProduct/:id", (req, res) => {
  let oid = mongo.ObjectId(req.params.id);

  Product.updateOne(
    { _id: oid },
    {
      $set: {
        productTitle: req.body.productTitle,
        productCategory: req.body.productCategory,
        price: req.body.price,
        description: req.body.description,
      },
    },
    (err, result) => {
      if (err) throw err;
      res.send("Product Updated");
    }
  );
});

router.delete("/deleteProduct/:id", (req, res) => {
  console.log(req.params.id);
  Product.deleteOne({ _id: req.params.id }, function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
