import { Pool, ResultSetHeader } from 'mysql2/promise';
import { TProduct, IAllProductsResponse, IRequestOrder } from '../utils/interfaces';

export default class ProductsModel {
  constructor(readonly connection: Pool) {
    this.connection = connection;
  }

  public create = async (product: TProduct)
  : Promise<number> => {
    const { name, amount } = product;
    const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);
    return insertId;
  };

  public getAll = async (): Promise<IAllProductsResponse[]> => {
    const query = 'SELECT * FROM Trybesmith.products';
    const [result] = await this.connection.execute<ResultSetHeader & IAllProductsResponse[]>(query);
    return result;
  };

  update = async (order: IRequestOrder): Promise<void> => {
    const { productId, orderId } = order;
    const query = `UPDATE Trybesmith.products
  SET order_id = ?
  WHERE id = ?
  `;
    await this.connection.execute(query, [orderId, productId]);
  };
}