import ordersModel from '../../models/functionals/ordersModel.functional';
import productsModel from '../../models/functionals/productsModel.functional';
import { IOrder, IOrderServicesReturnFormat } from '../../utils/interfaces';
import InputsValidation from '../validations/InputsValidation';

const getAll = async ()
: Promise<IOrderServicesReturnFormat> => {
  const orders = await ordersModel.getAll();
  
  return { type: null, message: orders };
};

const create = async (order: IOrder)
: Promise<IOrderServicesReturnFormat> => {
  const { user, productsIds } = order;

  const productsIdsCheck = new InputsValidation('', '', order);
  const checkProductsIds = productsIdsCheck.createOrdersValidation();

  if (checkProductsIds.type) return checkProductsIds;

  const orderId = await ordersModel.create(order);
  await Promise.all(productsIds.map((productId) => productsModel.update({ productId, orderId })));

  return { type: null, message: { userId: user.id, productsIds } };
};

export default { getAll, create };