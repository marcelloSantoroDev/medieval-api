import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import usersModel from '../models/usersModel';

const secret = process.env.JWT_SECRET || 'batatinha';

const tokenValidator = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const { data } = jwt.verify(token, secret) as JwtPayload;
    const user = await usersModel.loginUser({ username: data, password: '' });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    req.body.user = user;

    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

export default tokenValidator;