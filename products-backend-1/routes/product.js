const express = require("express");
const path  = require("path")
const router = express.Router();
const product = require("../data/product.json");
const { addProduct } = require("../model/product");


router.get("/", (req, res) => {
    res.send(product);
})
router.post("/", (req, res) => {
  const {title, price, imgUrl} = req.body;
  addProduct(title, price, imgUrl);
    res.send();
})

module.exports = router;