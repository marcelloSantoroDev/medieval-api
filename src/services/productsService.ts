import ProductsModel from '../models/productsModel';
import inputsValidation from './validations/validationInputValues';
import {
  TProduct,
  IProductsAndUsersServicesReturnFormat,
  IProductModel,
} from '../utils/interfaces';
import connection from '../models/connection';

export default class ProductsService {
  private ProductsModel: ProductsModel;

  constructor() {
    this.ProductsModel = new ProductsModel(connection);
  }

  public create = async (product: TProduct)
  : Promise<IProductsAndUsersServicesReturnFormat> => {
    const { name, amount } = product;

    const checkName = inputsValidation.nameAmountAndVocationValidations(name, 'name');
    if (checkName.type) return checkName;

    const checkAmount = inputsValidation.nameAmountAndVocationValidations(amount, 'amount');
    if (checkAmount.type) return checkAmount;

    const productId = await this.ProductsModel.create(product);

    const responseObject: IProductModel = { id: productId, name, amount }; 

    return { type: null, message: responseObject };
  };

  getAll = async ()
  : Promise<IProductsAndUsersServicesReturnFormat> => {
    const products = await this.ProductsModel.getAll();
    return { type: null, message: products };
  };
}