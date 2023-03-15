import { RowDataPacket } from 'mysql2';
import connection from './connection';
import { TUser, IUserModel, ILogin } from '../utils/interfaces';

const create = async (user: TUser) => {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO
  Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)`;
  connection.execute(query, [username, vocation, level, password]);
};

const loginUser = async (user: ILogin): Promise<IUserModel> => {
  const { username } = user; 
  const query = 'SELECT * FROM Trybesmith.users WHERE username = ?';
  const [[result]] = await connection.execute<RowDataPacket[] & IUserModel[]>(query, [username]);
  return result;
};

const loginPassword = async (user: ILogin): Promise<IUserModel> => {
  const { password } = user; 
  const query = 'SELECT * FROM Trybesmith.users WHERE password = ?';
  const [[result]] = await connection.execute<RowDataPacket[] & IUserModel[]>(query, [password]);
  return result;
};

export default { create, loginUser, loginPassword };