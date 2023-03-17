import usersModel from '../../models/functionals/usersModel.functional';
import UtilitaryFunctions from '../../utils/UtilitaryFunctions';
import { TUser, ILogin, IProductsAndUsersServicesReturnFormat } from '../../utils/interfaces';

const create = async (user: TUser)
: Promise<IProductsAndUsersServicesReturnFormat> => {
  const { username, vocation, level, password } = user;

  const userValidations = new UtilitaryFunctions({ username, vocation, level, password });
  const validateUser = userValidations.checkIfItsPossibleToCreateUser();

  if (validateUser.type) return validateUser;
  
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