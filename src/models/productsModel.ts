import { ResultSetHeader } from 'mysql2';
import connection from './connection';

interface IProductModel {
  id: number,
  name: string,
  amount: string
}

type IProduct = Omit <IProductModel, 'id'>;

const create = async (product: IProduct) => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return insertId;
};

const getAll = async () => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute(query);
  return result;
};

export default { create, getAll };