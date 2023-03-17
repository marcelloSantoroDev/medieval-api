import { IOrder, IValidationsReturnFormat } from '../../utils/interfaces';

// const nameAmountAndVocationValidations = (input: string, str: string)
// : IValidationsReturnFormat => {
//   if (!input) return { type: 'NOT_FOUND', message: `"${str}" is required` };

//   if (typeof input !== 'string') return { type: 'INVALID', message: `"${str}" must be a string` };

//   if (input.length < 3) {
//     return { type: 'INVALID', message: `"${str}" length must be at least 3 characters long` };
//   }

//   return { type: null, message: '' };
// };

// const levelValidations = (input: number, str: string)
// : IValidationsReturnFormat => {
//   if (input === undefined) return { type: 'NOT_FOUND', message: `"${str}" is required` };

//   if (typeof input !== 'number') return { type: 'INVALID', message: `"${str}" must be a number` };

//   if (input < 1) {
//     return { type: 'INVALID', message: `"${str}" must be greater than or equal to 1` };
//   }

//   return { type: null, message: '' };
// };

// const passwordValidations = (input: string, str: string)
// : IValidationsReturnFormat => {
//   if (!input) return { type: 'NOT_FOUND', message: `"${str}" is required` };

//   if (typeof input !== 'string') return { type: 'INVALID', message: `"${str}" must be a string` };

//   if (input.length < 8) {
//     return { type: 'INVALID', message: `"${str}" length must be at least 8 characters long` };
//   }

//   return { type: null, message: '' };
// };

// const createOrdersValidation = (order: IOrder)
// : IValidationsReturnFormat => {
//   const { productsIds } = order;

//   if (!productsIds) {
//     return { type: 'NOT_FOUND', message: '"productsIds" is required' };
//   }

//   if (!Array.isArray(productsIds)) {
//     return { type: 'INVALID', message: '"productsIds" must be an array' };
//   }

//   if (productsIds.length === 0) {
//     return { type: 'INVALID', message: '"productsIds" must include only numbers' };
//   }

//   return { type: null, message: '' };
// };

// export default {
//   nameAmountAndVocationValidations,
//   levelValidations,
//   passwordValidations,
//   createOrdersValidation,
// };

export default class ValidationInputValues {
  private input: string | number;

  private str: string;

  private order: IOrder | null;

  constructor(input: string | number, str: string, order: IOrder | null) {
    this.input = input;
    this.str = str;
    this.order = order;
  }

  public nameAmountAndVocationValidations = (): IValidationsReturnFormat => {
    if (!this.input) return { type: 'NOT_FOUND', message: `"${this.str}" is required` };

    if (typeof this.input !== 'string') {
      return { type: 'INVALID', message: `"${this.str}" must be a string` };
    }

    if (this.input.length < 3) {
      return {
        type: 'INVALID', message: `"${this.str}" length must be at least 3 characters long` };
    }

    return { type: null, message: '' };
  };

  public levelValidations = (): IValidationsReturnFormat => {
    if (this.input === undefined) {
      return { type: 'NOT_FOUND', message: `"${this.str}" is required` };
    }

    if (typeof this.input !== 'number') {
      return { type: 'INVALID', message: `"${this.str}" must be a number` };
    }

    if (this.input < 1) {
      return { type: 'INVALID', message: `"${this.str}" must be greater than or equal to 1` };
    }

    return { type: null, message: '' };
  };

  public passwordValidations = (): IValidationsReturnFormat => {
    if (!this.input) return { type: 'NOT_FOUND', message: `"${this.str}" is required` };

    if (typeof this.input !== 'string') {
      return { type: 'INVALID', message: `"${this.str}" must be a string` };
    }

    if (this.input.length < 8) {
      return {
        type: 'INVALID', message: `"${this.str}" length must be at least 8 characters long` };
    }

    return { type: null, message: '' };
  };

  public createOrdersValidation = (): IValidationsReturnFormat => {
    const { productsIds } = this.order as IOrder;

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
}