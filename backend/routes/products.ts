import express from "express";
import products from "../data/products";
import { Request, Response } from "express";
import { Product } from "../../shared/interfaces";
import ProductModel from "../models/products";
import asyncHandler from "express-async-handler";
import Product from "../models/products";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (_req: Request, res: Response) => {
    const products = await ProductModel.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const product = await ProductModel.findById(req.params.id);

    if (product) {
      res.json(product);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default router;
