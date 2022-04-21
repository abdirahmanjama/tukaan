import express from "express";
import products from "./routes/products";
import productsData from "./data/products";
import connectDB from "./config/db";
import dotenv from "dotenv";
import { Product } from "../shared/interfaces";

dotenv.config();

const app = express();

connectDB();

/**
 * Express routes and middlewares
 */

app.get("/", (_, res) => {
  res.send("API is running");
});

app.get("/api/products", products);

// app.get("/api/products/:id", (req, res) => {
//   // const product: Product | undefined = productsData?.find(
//   //   (item) => item._id === req.params.id
//   // );
//   res.send(product);
// });

/**
 * Server
 */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`${PORT}`));
