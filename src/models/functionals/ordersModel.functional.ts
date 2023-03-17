import { ResultSetHeader } from 'mysql2';
import { IOrder, IOrderControllerResponse } from '../../utils/interfaces';
import connection from '../connection';

const getAll = async ()
: Promise<IOrderControllerResponse[]> => {
  const query = `
SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
FROM Trybesmith.orders as o
INNER JOIN Trybesmith.products as p
WHERE o.id = p.order_id
GROUP BY o.id;
`;
  const [result] = await connection.execute<ResultSetHeader & IOrderControllerResponse[]>(query);
  
  return result;
};

const create = async (order: IOrder)
: Promise<number> => {
  const { user } = order;
  const query = 'INSERT INTO Trybesmith.orders (user_id) VALUES (?)';
  const [{ insertId }] = await connection.execute<ResultSetHeader>(query, [user.id]);
  return insertId;
};

export default { getAll, create };