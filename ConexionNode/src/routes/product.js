const express = require("express");
const productSchema = require("../models/product");


const router = express.Router();

//create product

router.post("/product", (req, res)=> {
    const product = productSchema(req.body);
    product
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});

//get all products

router.get("/product", (req, res)=> {
    productSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message:error}));

});

module.exports =router;