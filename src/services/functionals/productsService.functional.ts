import productsModel from '../../models/functionals/productsModel.functional';
import inputsValidation from '../validations/validationInputValues';
import {
  TProduct,
  IProductsAndUsersServicesReturnFormat,
  IProductModel,
} from '../../utils/interfaces';

const create = async (product: TProduct)
: Promise<IProductsAndUsersServicesReturnFormat> => {
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
: Promise<IProductsAndUsersServicesReturnFormat> => {
  const products = await productsModel.getAll();
  return { type: null, message: products };
};

export default { create, getAll };