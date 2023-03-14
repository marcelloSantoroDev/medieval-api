import usersModel from '../models/usersModel';

interface IUserModel {
  id: number,
  username: string,
  vocation: string,
  level: string,
  password: string
}

type IUser = Omit <IUserModel, 'id'>;

interface ILogin {
  username: string,
  password: string
}

const create = async (user: IUser) => {
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