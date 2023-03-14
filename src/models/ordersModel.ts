import connection from './connection';

const getAll = async () => {
  const query = `
SELECT o.id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
FROM Trybesmith.orders as o
INNER JOIN Trybesmith.products as p
WHERE o.id = p.order_id
GROUP BY o.id;
`;
  const [result] = await connection.execute(query);
  return result;
};

export default { getAll };