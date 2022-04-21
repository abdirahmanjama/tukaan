import express from "express";
import products from "./routes/products";
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

/**
 * Server
 */
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`${PORT}`));
