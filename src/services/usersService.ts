import usersModel from '../models/usersModel';
import utilitaryFunctions from '../utils/utilitaryFunctions';
import { TUser, ILogin, IProductsAndUsersServicesReturnFormat } from '../utils/interfaces';

const create = async (user: TUser)
: Promise<IProductsAndUsersServicesReturnFormat> => {
  const { username, vocation, level, password } = user;

  const userValidations = utilitaryFunctions
    .checkIfItsPossibleToCreateUser({ username, vocation, level, password });

  if (userValidations.type) return userValidations;
  
  await usersModel.create(user);

  return { type: null, message: '' };
};

const login = async (user: ILogin)
: Promise<IProductsAndUsersServicesReturnFormat> => {
  const { username, password } = user;
  
  if (!username) return { type: 'NOT_FOUND', message: '"username" is required' };
  if (!password) return { type: 'NOT_FOUND', message: '"password" is required' };

  const getByUsername = await usersModel.loginUser(user);
  
  const getByPassword = await usersModel.loginPassword(user);
  
  if (!getByPassword || !getByUsername) {
    return { type: 'INVALID', message: 'Username or password invalid' };
  }
  return { type: null, message: '' };
};

export default { create, login };