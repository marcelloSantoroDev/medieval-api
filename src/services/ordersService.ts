import ordersModel from '../models/ordersModel';

const getAll = async () => {
  const orders = await ordersModel.getAll();
  return { type: null, message: orders };
};

export default { getAll };