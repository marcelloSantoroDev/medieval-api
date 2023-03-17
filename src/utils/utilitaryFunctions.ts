import InputsValidation from '../services/validations/validationInputValues';
import { TUser, IValidationsReturnFormat } from './interfaces';

// const checkIfItsPossibleToCreateUser = (user: TUser): IValidationsReturnFormat => {
//   const { username, vocation, level, password } = user;

//   const checkUsername = inputsValidation.nameAmountAndVocationValidations(username, 'username');
//   if (checkUsername.type) return checkUsername;

//   const checkVocation = inputsValidation.nameAmountAndVocationValidations(vocation, 'vocation');
//   if (checkVocation.type) return checkVocation;

//   const checkLevel = inputsValidation.levelValidations(level, 'level');
//   if (checkLevel.type) return checkLevel;

//   const checkPassword = inputsValidation.passwordValidations(password, 'password');
//   if (checkPassword.type) return checkPassword;

//   return { type: null, message: '' };
// };

// export default { checkIfItsPossibleToCreateUser };

export default class UtilitaryFunctions {
  private user: TUser;

  constructor(user: TUser) {
    this.user = user;
  }

  public checkIfItsPossibleToCreateUser = (): IValidationsReturnFormat => {
    const { username, vocation, level, password } = this.user;
    
    const usernameCheck = new InputsValidation(username, 'username', null);
    const checkUsername = usernameCheck.nameAmountAndVocationValidations();
    if (checkUsername.type) return checkUsername;

    const vocationCheck = new InputsValidation(vocation, 'vocation', null);
    const checkVocation = vocationCheck.nameAmountAndVocationValidations();
    if (checkVocation.type) return checkVocation;

    const levelCheck = new InputsValidation(level, 'level', null);
    const checkLevel = levelCheck.levelValidations();
    if (checkLevel.type) return checkLevel;

    const passwordCheck = new InputsValidation(password, 'password', null);
    const checkPassword = passwordCheck.passwordValidations();
    if (checkPassword.type) return checkPassword;

    return { type: null, message: '' };
  };
}