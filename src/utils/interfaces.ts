// USERS
interface IUserModel {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string
}

type TUser = Omit <IUserModel, 'id'>;

interface IProductsAndUsersServicesReturnFormat {
  type: string | null,
  message: IProductModel | string | IAllProductsResponse[]
}

// LOGIN
interface ILogin {
  username: string,
  password: string
}

// PRODUCTS
interface IProductModel {
  id: number,
  name: string,
  amount: string
}

type TProduct = Omit <IProductModel, 'id'>;

interface IAllProductsResponse {
  id: number,
  name: string,
  amount: string,
  orderId: number | null
}

// ORDERS
interface IOrderControllerResponse {
  userId: number,
  productsIds: number[]
}

interface IAllOrdersControllerResponse {
  id: number,
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

interface IOrderServicesReturnFormat {
  type: string | null,
  message: IOrderControllerResponse | IOrderControllerResponse[] | string
}

// ERRORS
interface IErrorJson {
  message: string
}

// TOKEN
interface IToken {
  token: string
}

// VALIDATIONS
interface IValidationsReturnFormat {
  type: string | null,
  message: string
}

export {
  IUserModel,
  TUser,
  ILogin,
  IProductModel,
  TProduct,
  IAllOrdersControllerResponse,
  IOrder,
  IRequestOrder,
  IErrorJson,
  IOrderControllerResponse,
  IAllProductsResponse,
  IToken,
  IValidationsReturnFormat,
  IOrderServicesReturnFormat,
  IProductsAndUsersServicesReturnFormat,
};