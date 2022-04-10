const { Request, Response } = require("express");
const products = require("./data/products");

module.exports(req, res) =  res.json(products);
