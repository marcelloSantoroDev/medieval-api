import { Request, Response } from 'express';
import tokenGenerator from '../utils/tokenGenerator';
import { IToken } from '../utils/interfaces';
import UsersService from '../services/usersService';

export default class {
  private UsersService: UsersService;

  constructor() {
    this.UsersService = new UsersService();
  }

  public create = async (req: Request, res: Response)
  : Promise<Response<IToken>> => {
    const { username, vocation, level, password } = req.body;
    const { type, message } = await this.UsersService
      .create({ username, vocation, level, password });

    if (type === 'NOT_FOUND') return res.status(400).json({ message });
    if (type === 'INVALID') return res.status(422).json({ message });

    const token = tokenGenerator(username);
  
    return res.status(201).json({ token });
  };

  public login = async (req: Request, res: Response)
  : Promise<Response<IToken>> => {
    const { username, password } = req.body;
    const { type, message } = await this.UsersService.login({ username, password });

    if (type === 'NOT_FOUND') return res.status(400).json({ message });
    if (type === 'INVALID') return res.status(401).json({ message });

    const token = tokenGenerator(username);

    return res.status(200).json({ token });
  };
}