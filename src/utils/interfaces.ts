interface IUserModel {
  id: number,
  username: string,
  vocation: string,
  level: number,
  password: string
}

type IUser = Omit <IUserModel, 'id'>;

interface ILogin {
  username: string,
  password: string
}

interface IProductModel {
  id: number,
  name: string,
  amount: string
}

type IProduct = Omit <IProductModel, 'id'>;

export { IUserModel, IUser, ILogin, IProductModel, IProduct };