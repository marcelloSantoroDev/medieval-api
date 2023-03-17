import OrdersModel from '../models/OrdersModel';
import ProductsModel from '../models/ProductsModel';
import connection from '../models/Connection';
import { IOrder, IOrderServicesReturnFormat } from '../utils/interfaces';
import InputsValidation from './validations/InputsValidation';

export default class OrdersService {
  private OrdersModel: OrdersModel;

  private ProductsModel: ProductsModel;

  constructor() {
    this.OrdersModel = new OrdersModel(connection);
    this.ProductsModel = new ProductsModel(connection); 
  }

  public getAll = async ()
  : Promise<IOrderServicesReturnFormat> => {
    const orders = await this.OrdersModel.getAll();
  
    return { type: null, message: orders };
  };

  public create = async (order: IOrder)
  : Promise<IOrderServicesReturnFormat> => {
    const { user, productsIds } = order;

    const productsIdsCheck = new InputsValidation('', '', order);
    const checkProductsIds = productsIdsCheck.createOrdersValidation();

    if (checkProductsIds.type) return checkProductsIds;

    const orderId = await this.OrdersModel.create(order);

    await Promise.all(productsIds.map((productId) => this.ProductsModel
      .update({ productId, orderId })));

    return { type: null, message: { userId: user.id, productsIds } };
  };
}