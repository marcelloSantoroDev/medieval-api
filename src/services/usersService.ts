import usersModel from '../models/usersModel';
import inputsValidation from './validations/validationInputValues';

interface IUserModel {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string
}

type IUser = Omit <IUserModel, 'id'>;

interface ILogin {
  username: string,
  password: string
}

const check = (user: IUser) => {
  const { username, vocation, level, password } = user;
  const checkUsername = inputsValidation.firstValidations(username, 'username');
  if (checkUsername.type) return checkUsername;
  const checkVocation = inputsValidation.firstValidations(vocation, 'vocation');
  if (checkVocation.type) return checkVocation;
  const checkLevel = inputsValidation.levelValidations(level, 'level');
  if (checkLevel.type) return checkLevel;
  const checkPassword = inputsValidation.passwordValidations(password, 'password');
  if (checkPassword.type) return checkPassword;
  return { type: null, message: '' };
};

const create = async (user: IUser) => {
  const { username, vocation, level, password } = user;

  const validations = check({ username, vocation, level, password });

  if (validations.type) return validations;
  
  await usersModel.create(user);
  return { type: null, message: '' };
};

const login = async (user: ILogin) => {
  const { username, password } = user;
  if (!username) return { type: 'NOT_FOUND', message: '"username" is required' };
  if (!password) return { type: 'NOT_FOUND', message: '"password" is required' };

  const getByUsername = await usersModel.loginUser(user);
  // console.log('USERNAME >>>>>>>', getByUsername.username);
  
  const getByPassword = await usersModel.loginPassword(user);
  // console.log('PASSWORD >>>>>>>', getByPassword);
  
  if (!getByPassword || !getByUsername) {
    return { type: 'INVALID', message: 'Username or password invalid' };
  }
  return { type: null, message: '' };
};

export default { create, login };