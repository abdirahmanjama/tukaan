import products from "../data/products.json";
import { Request, Response } from "express";
import { Product } from "../../shared/interfaces";

export default (_req: Request, res: Response<Product[]>) => res.json(products);
