import e from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc: send all products
// @route: GET /api/products
// @access: Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc: send a particular product details
// @route: GET /api/products/:id
// @access: Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("No Product found");
  }
});

export { getProducts, getProductById };
