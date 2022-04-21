import products from "../data/products";
import { Request, Response } from "express";
import { Product } from "../../shared/interfaces";

export default (_req: Request, res: Response<Product[]>) => res.send(products);
