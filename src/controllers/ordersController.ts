import { Request, Response } from 'express';
import OrdersService from '../services/ordersService';
import {
  IErrorJson,
  IOrderControllerResponse,
  IAllOrdersControllerResponse,
} from '../utils/interfaces';

export default class OrdersController {
  private OrdersService: OrdersService;

  constructor() {
    this.OrdersService = new OrdersService();
  }

  public getAll = async (_req: Request, res: Response)
  : Promise<Response<IAllOrdersControllerResponse[]>> => {
    const { message } = await this.OrdersService.getAll();

    return res.status(200).json(message);
  };

  public create = async (req: Request, res: Response)
  : Promise<Response<IOrderControllerResponse | IErrorJson>> => {
    const { productsIds, user } = req.body;
    const { type, message } = await this.OrdersService.create({ productsIds, user });

    if (type === 'NOT_FOUND') return res.status(400).json({ message });
    if (type === 'INVALID') return res.status(422).json({ message });

    return res.status(201).json(message);
  };
}