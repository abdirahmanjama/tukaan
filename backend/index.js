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

app.get("/api/products/:id", async (req, res) => {
  const product = await products.find((item) => item._id === req.params.id);
  res.send(product);
});

/**
 * Server
 */
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`server listening on ${PORT}`));
