const express = require("express");
const products = require("./data/products");
const app = express();

/**
 * Express routes and middlewares
 */

app.get("/", (_, res) => {
  res.send("API is running");
});

app.get("/api/products", (_, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((item) => item._id === req.params.id);
  res.json(product);
});

/**
 * Server
 */

app.listen(7654, console.log("server listening on port 7654"));
