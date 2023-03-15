import inputsValidation from '../services/validations/validationInputValues';
import { TUser, IValidationsReturnFormat } from './interfaces';

const checkIfItsPossibleToCreateUser = (user: TUser): IValidationsReturnFormat => {
  const { username, vocation, level, password } = user;

  const checkUsername = inputsValidation.nameAmountAndVocationValidations(username, 'username');
  if (checkUsername.type) return checkUsername;

  const checkVocation = inputsValidation.nameAmountAndVocationValidations(vocation, 'vocation');
  if (checkVocation.type) return checkVocation;

  const checkLevel = inputsValidation.levelValidations(level, 'level');
  if (checkLevel.type) return checkLevel;

  const checkPassword = inputsValidation.passwordValidations(password, 'password');
  if (checkPassword.type) return checkPassword;

  return { type: null, message: '' };
};

export default { checkIfItsPossibleToCreateUser };