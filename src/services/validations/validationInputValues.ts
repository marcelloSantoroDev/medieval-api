import { IOrder } from '../../utils/interfaces';

const nameAmountAndVocationValidations = (input: string, str: string) => {
  if (!input) return { type: 'NOT_FOUND', message: `"${str}" is required` };

  if (typeof input !== 'string') return { type: 'INVALID', message: `"${str}" must be a string` };

  if (input.length < 3) {
    return { type: 'INVALID', message: `"${str}" length must be at least 3 characters long` };
  }

  return { type: null, message: '' };
};

const levelValidations = (input: number, str: string) => {
  if (input === undefined) return { type: 'NOT_FOUND', message: `"${str}" is required` };

  if (typeof input !== 'number') return { type: 'INVALID', message: `"${str}" must be a number` };

  if (input < 1) {
    return { type: 'INVALID', message: `"${str}" must be greater than or equal to 1` };
  }

  return { type: null, message: '' };
};

const passwordValidations = (input: string, str: string) => {
  if (!input) return { type: 'NOT_FOUND', message: `"${str}" is required` };

  if (typeof input !== 'string') return { type: 'INVALID', message: `"${str}" must be a string` };

  if (input.length < 8) {
    return { type: 'INVALID', message: `"${str}" length must be at least 8 characters long` };
  }

  return { type: null, message: '' };
};

const createOrdersValidation = (order: IOrder) => {
  const { productsIds } = order;

  if (!productsIds) {
    return { type: 'NOT_FOUND', message: '"productsIds" is required' };
  }

  if (!Array.isArray(productsIds)) {
    return { type: 'INVALID', message: '"productsIds" must be an array' };
  }

  if (productsIds.length === 0) {
    return { type: 'INVALID', message: '"productsIds" must include only numbers' };
  }

  return { type: null, message: '' };
};

export default {
  nameAmountAndVocationValidations,
  levelValidations,
  passwordValidations,
  createOrdersValidation,
};