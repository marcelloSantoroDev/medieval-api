import { Request, Response } from 'express';
import ordersService from '../services/ordersService';

const getAll = async (req: Request, res: Response) => {
  const { message } = await ordersService.getAll();
  return res.status(200).json(message);
};

export default { getAll };