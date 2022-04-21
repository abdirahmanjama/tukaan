import express, { Request, Response } from "express";
import ProductModel from "../models/products";
import asyncHandler from "express-async-handler";

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (_req: Request, res: Response) => {
    const products = ProductModel.find({});
    res.json(products);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req: Request, res: Response) => {
    const product = ProductModel.findById(req.params.id);

    if (product) {
      res.json(product);
    }
    res.status(404).json({ message: "Product not found" });
  })
);

export default router;
