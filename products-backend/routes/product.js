const express = require("express");
const path  = require("path")
const router = express.Router();
const products = require("../data/product.json")


router.get("/", (req, res) => {
    res.send(products);
})

module.exports = router;