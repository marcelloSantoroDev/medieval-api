interface IUserModel {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string
}

type TUser = Omit <IUserModel, 'id'>;

interface ILogin {
  username: string,
  password: string
}

interface IProductModel {
  id: number,
  name: string,
  amount: string
}

type TProduct = Omit <IProductModel, 'id'>;

interface IOrderModel {
  userId: number,
  productsId: number[]
}

interface IOrder {
  user: IUserModel;
  productsIds: number[];
}

interface IRequestOrder {
  productId: number,
  orderId: number,
}

interface IErrorJson {
  message: string
}

export {
  IUserModel,
  TUser,
  ILogin,
  IProductModel,
  TProduct,
  IOrderModel,
  IOrder,
  IRequestOrder,
  IErrorJson,
};