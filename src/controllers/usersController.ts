import { Request, Response } from 'express';
import usersService from '../services/usersService';
import tokenGenerator from '../utils/tokenGenerator';

const create = async (req: Request, res: Response) => {
  const { username, vocation, level, password } = req.body;
  await usersService.create({ username, vocation, level, password });
  const token = tokenGenerator(username);
  return res.status(201).json({ token });
};

export default { create };