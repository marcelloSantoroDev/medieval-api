import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IOrderControllerResponse, IOrder } from '../utils/interfaces';

export default class OrderService {
  constructor(readonly connection: Pool) {
    this.connection = connection;
  }

  public getAll = async ()
  : Promise<IOrderControllerResponse[]> => {
    const query = `
    SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.orders as o
    INNER JOIN Trybesmith.products as p
    WHERE o.id = p.order_id
    GROUP BY o.id;
`;
    const [result] = await this.connection
      .execute<ResultSetHeader & IOrderControllerResponse[]>(query);
  
    return result;
  };

  public create = async (order: IOrder)
  : Promise<number> => {
    const { user } = order;
    const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(query, [user.id]);
    return insertId;
  };
}
