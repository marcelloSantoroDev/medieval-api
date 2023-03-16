import ordersModel from '../../models/functionals/ordersModel.functional';
import productsModel from '../../models/functionals/productsModel.functional';
import { IOrder, IOrderServicesReturnFormat } from '../../utils/interfaces';
import validationInputValues from '../validations/validationInputValues';

const getAll = async ()
: Promise<IOrderServicesReturnFormat> => {
  const orders = await ordersModel.getAll();
  
  return { type: null, message: orders };
};

const create = async (order: IOrder)
: Promise<IOrderServicesReturnFormat> => {
  const { user, productsIds } = order;

  const checkProductsIds = validationInputValues.createOrdersValidation(order);

  if (checkProductsIds.type) return checkProductsIds;

  const orderId = await ordersModel.create(order);
  await Promise.all(productsIds.map((productId) => productsModel.update({ productId, orderId })));

  return { type: null, message: { userId: user.id, productsIds } };
};

export default { getAll, create };