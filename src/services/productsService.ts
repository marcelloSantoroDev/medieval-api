import productsModel from '../models/productsModel';
import inputsValidation from './validations/validationInputValues';
import { TProduct, IProductsServicesReturnFormat, IProductModel } from '../utils/interfaces';

const create = async (product: TProduct)
: Promise<IProductsServicesReturnFormat> => {
  const { name, amount } = product;

  const checkName = inputsValidation.nameAmountAndVocationValidations(name, 'name');
  if (checkName.type) return checkName;

  const checkAmount = inputsValidation.nameAmountAndVocationValidations(amount, 'amount');
  if (checkAmount.type) return checkAmount;

  const productId = await productsModel.create(product);

  const responseObject: IProductModel = { id: productId, name, amount }; 

  return { type: null, message: responseObject };
};

const getAll = async ()
: Promise<IProductsServicesReturnFormat> => {
  const products = await productsModel.getAll();
  return { type: null, message: products };
};

export default { create, getAll };