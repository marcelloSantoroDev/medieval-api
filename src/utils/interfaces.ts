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
  productsIds: number[]
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

interface IOrdersResponse {
  id: number,
  userId: number,
  productsIds: number[]
}

interface IAllProductsResponse {
  id: number,
  name: string,
  amount: string,
  orderId: number | null
}

interface IToken {
  token: string
}

interface IValidationsReturnFormat {
  type: string | null,
  message: string
}

interface IOrderServicesReturnFormat {
  type: string | null,
  message: IOrdersResponse[] | IOrderModel | string
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
  IOrdersResponse,
  IAllProductsResponse,
  IToken,
  IValidationsReturnFormat,
  IOrderServicesReturnFormat,
};