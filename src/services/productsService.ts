import productsModel from '../models/productsModel';

interface IProductModel {
  id: number,
  name: string,
  amount: string
}

type IProduct = Omit <IProductModel, 'id'>;

const create = async (product: IProduct) => {
  const { name, amount } = product;
  const productId = await productsModel.create(product);
  const responseObject = { id: productId, name, amount }; 
  return { type: null, message: responseObject };
};

const getAll = async () => {
  const products = await productsModel.getAll();
  return { type: null, message: products };
};

export default { create, getAll };