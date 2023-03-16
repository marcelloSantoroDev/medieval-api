import { ResultSetHeader } from 'mysql2';
import connection from '../connection';
import { TProduct, IRequestOrder, IAllProductsResponse } from '../../utils/interfaces';

const create = async (product: TProduct)
: Promise<number> => {
  const { name, amount } = product;
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [name, amount]);
  return insertId;
};

const getAll = async (): Promise<IAllProductsResponse[]> => {
  const query = 'SELECT * FROM Trybesmith.products';
  const [result] = await connection.execute<ResultSetHeader & IAllProductsResponse[]>(query);
  return result;
};

const update = async (order: IRequestOrder): Promise<void> => {
  const { productId, orderId } = order;
  const query = `UPDATE Trybesmith.products
  SET order_id = ?
  WHERE id = ?
  `;
  await connection.execute(query, [orderId, productId]);
};

export default { create, getAll, update };