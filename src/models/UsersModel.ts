import { Pool, RowDataPacket } from 'mysql2/promise';
import { TUser, IUserModel, ILogin } from '../utils/interfaces';

export default class UsersModel {
  constructor(readonly connection: Pool) {
    this.connection = connection;
  }

  public create = async (user: TUser)
  : Promise<void> => {
    const { username, vocation, level, password } = user;
    const query = `INSERT INTO
  Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)`;
    this.connection.execute(query, [username, vocation, level, password]);
  };

  loginUser = async (user: ILogin)
  : Promise<IUserModel> => {
    const { username } = user; 
    const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
    const [[result]] = await this.connection
      .execute<RowDataPacket[] & IUserModel[]>(query, [username]);
    return result;
  };

  loginPassword = async (user: ILogin)
  : Promise<IUserModel> => {
    const { password } = user; 
    const query = 'SELECT * FROM Trybesmith.users WHERE password = ?';
    const [[result]] = await this.connection
      .execute<RowDataPacket[] & IUserModel[]>(query, [password]);
    return result;
  };
}