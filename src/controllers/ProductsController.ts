import { Request, Response } from 'express';
import { IProductModel, IErrorJson, IAllProductsResponse } from '../utils/interfaces';
import ProductsService from '../services/ProductsService';

export default class ProductsController {
  private ProductsService: ProductsService;

  constructor(productsService: ProductsService) {
    this.ProductsService = productsService;
  }

  public create = async (req: Request, res: Response)
  : Promise<Response<IProductModel | IErrorJson>> => {
    const { name, amount } = req.body;
    const { type, message } = await this.ProductsService.create({ name, amount });

    if (type === 'NOT_FOUND') return res.status(400).json({ message });
    if (type === 'INVALID') return res.status(422).json({ message });
  
    return res.status(201).json(message);
  };

  public getAll = async (req: Request, res: Response)
  : Promise<Response<IAllProductsResponse[]>> => {
    const { message } = await this.ProductsService.getAll();

    return res.status(200).json(message);
  };
}