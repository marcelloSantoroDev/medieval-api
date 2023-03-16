import OrdersModel from '../models/ordersModel';
import ProductsModel from '../models/productsModel';
import connection from '../models/connection';
import { IOrder, IOrderServicesReturnFormat } from '../utils/interfaces';
import validationInputValues from './validations/validationInputValues';

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

    const checkProductsIds = validationInputValues.createOrdersValidation(order);

    if (checkProductsIds.type) return checkProductsIds;

    const orderId = await this.OrdersModel.create(order);

    await Promise.all(productsIds.map((productId) => this.ProductsModel
      .update({ productId, orderId })));

    return { type: null, message: { userId: user.id, productsIds } };
  };
}