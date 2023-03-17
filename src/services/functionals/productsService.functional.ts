import productsModel from '../../models/functionals/productsModel.functional';
import InputsValidation from '../validations/InputsValidation';
import {
  TProduct,
  IProductsAndUsersServicesReturnFormat,
  IProductModel,
} from '../../utils/interfaces';

const create = async (product: TProduct)
: Promise<IProductsAndUsersServicesReturnFormat> => {
  const { name, amount } = product;

  const nameCheck = new InputsValidation(name, 'nome', null);
  const checkName = nameCheck.nameAmountAndVocationValidations();
  if (checkName.type) return checkName;
  const amountCheck = new InputsValidation(amount, 'amount', null);
  const checkAmount = amountCheck.nameAmountAndVocationValidations();
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