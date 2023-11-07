const path = require('path');
const fs = require("fs");
const express = require("express");
const productFils = path.join(process.cwd(),"data", "product.json");

const addProduct = (title, price, imgUrl) => {
    fs.readFile(productFils,"utf8", (err, data) => {
        if(err){
            throw new Error;
        }
        const josonProductData = JSON.parse(data);
        let {products} = josonProductData;
        products.push({title, price, imgUrl})

        return products;

    })
}
module.exports = {addProduct}