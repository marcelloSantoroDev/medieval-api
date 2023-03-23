import ProductsModel from '../models/ProductsModel';
import InputsValidation from './validations/InputsValidation';
import {
  TProduct,
  IProductsAndUsersServicesReturnFormat,
  IProductModel,
} from '../utils/interfaces';

export default class ProductsService {
  private ProductsModel: ProductsModel;

  constructor(productsModel: ProductsModel) {
    this.ProductsModel = productsModel;
  }

  public create = async (product: TProduct)
  : Promise<IProductsAndUsersServicesReturnFormat> => {
    const { name, amount } = product;

    const nameCheck = new InputsValidation(name, 'name', null);
    const checkName = nameCheck.nameAmountAndVocationValidations();
    if (checkName.type) return checkName;

    const amountCheck = new InputsValidation(amount, 'amount', null);
    const checkAmount = amountCheck.nameAmountAndVocationValidations();
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