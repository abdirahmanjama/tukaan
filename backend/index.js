import express from "express";
import products from "./routes/products.js";
import productsData from "./data/products.js";
const app = express();

/**
 * Express routes and middlewares
 */

app.get("/", (_, res) => {
  res.send("API is running");
});

app.get("/api/products", products);

app.get("/api/products/:id", (req, res) => {
  const product = productsData.find((item) => item._id === req.params.id);
  res.send(product);
});

/**
 * Server
 */
const PORT = process.env.PORT || 5001;
app.listen(PORT, console.log(`server listening on ${PORT}`));
