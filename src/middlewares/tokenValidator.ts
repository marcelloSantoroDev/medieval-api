import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';

const secret = process.env.JWT_SECRET;

const tokenValidator = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { data } = jwt.verify(token, secret);
    const user = await usersModel.loginUser(data);

    req.user = user;
    
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenValidator;