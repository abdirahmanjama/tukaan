import products from "../data/products.json";
import { Request, Response } from "express";

export default (_req: Request, res: Response) => res.json(products);
