import { Request, Response } from 'express';
import productsService from '../services/productsService';

const create = async (req: Request, res: Response) => {
  const { name, amount } = req.body;
  const { message } = await productsService.create({ name, amount });
  return res.status(201).json(message);
};

export default { create };