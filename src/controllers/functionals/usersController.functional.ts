import { Request, Response } from 'express';
import usersService from '../../services/functionals/usersService.functional';
import TokenGenerator from '../../utils/TokenGenerator';
import { IToken } from '../../utils/interfaces';

const create = async (req: Request, res: Response)
: Promise<Response<IToken>> => {
  const { username, vocation, level, password } = req.body;
  const { type, message } = await usersService.create({ username, vocation, level, password });

  if (type === 'NOT_FOUND') return res.status(400).json({ message });
  if (type === 'INVALID') return res.status(422).json({ message });

  const tokenGenerator = new TokenGenerator(username);
  const token = tokenGenerator.generate();
  
  return res.status(201).json({ token });
};

const login = async (req: Request, res: Response)
: Promise<Response<IToken>> => {
  const { username, password } = req.body;
  const { type, message } = await usersService.login({ username, password });

  if (type === 'NOT_FOUND') return res.status(400).json({ message });
  if (type === 'INVALID') return res.status(401).json({ message });

  const tokenGenerator = new TokenGenerator(username);
  const token = tokenGenerator.generate();
  
  return res.status(200).json({ token });
};

export default { create, login };