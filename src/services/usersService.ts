import usersModel from '../models/usersModel';

interface IUserModel {
  id: number,
  username: string,
  vocation: string,
  level: string,
  password: string
}

type IUser = Omit <IUserModel, 'id'>;

const create = async (user: IUser) => {
  await usersModel.create(user);
  return { type: null, message: '' };
};

export default { create };