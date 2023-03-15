import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import { IProduct } from '../utils/interfaces';

interface IRequestOrder {
  productId: number,
  orderId: number,
}

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

const update = async (order: IRequestOrder) => {
  const { productId, orderId } = order;
  const query = `UPDATE Trybesmith.products
  SET order_id = ?
  WHERE id = ?
  `;
  connection.execute(query, [orderId, productId]);
};

export default { create, getAll, update };