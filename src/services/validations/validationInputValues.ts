const firstValidations = (input: string, str: string) => {
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

export default { firstValidations, levelValidations, passwordValidations };