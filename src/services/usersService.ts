import UtilitaryFunctions from '../utils/utilitaryFunctions';
import { TUser, ILogin, IProductsAndUsersServicesReturnFormat } from '../utils/interfaces';
import UsersModel from '../models/usersModel';
import connection from '../models/connection';

export default class {
  private UsersModel: UsersModel;

  constructor() {
    this.UsersModel = new UsersModel(connection);
  }

  public create = async (user: TUser)
  : Promise<IProductsAndUsersServicesReturnFormat> => {
    const { username, vocation, level, password } = user;

    const utilitaryFunctions = new UtilitaryFunctions({ username, vocation, level, password });
    const userValidations = utilitaryFunctions
      .checkIfItsPossibleToCreateUser();

    if (userValidations.type) return userValidations;
  
    await this.UsersModel.create(user);

    return { type: null, message: '' };
  };

  public login = async (user: ILogin)
  : Promise<IProductsAndUsersServicesReturnFormat> => {
    const { username, password } = user;
  
    if (!username) return { type: 'NOT_FOUND', message: '"username" is required' };
    if (!password) return { type: 'NOT_FOUND', message: '"password" is required' };

    const getByUsername = await this.UsersModel.loginUser(user);
  
    const getByPassword = await this.UsersModel.loginPassword(user);
  
    if (!getByPassword || !getByUsername) {
      return { type: 'INVALID', message: 'Username or password invalid' };
    }
    return { type: null, message: '' };
  };
}