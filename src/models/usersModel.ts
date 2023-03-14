import connection from './connection';

interface IUserModel {
  id: number,
  username: string,
  vocation: string,
  level: string,
  password: string
}

type IUser = Omit <IUserModel, 'id'>;

const create = async (user: IUser) => {
  const { username, vocation, level, password } = user;
  const query = `INSERT INTO
  Trybesmith.users (username, vocation, level, password) VALUES (?,?,?,?)`;
  connection.execute(query, [username, vocation, level, password]);
};

export default { create };