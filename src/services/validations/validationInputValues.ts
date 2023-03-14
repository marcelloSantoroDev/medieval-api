const productValidation = (input: string, str: string) => {
  if (!input) return { type: 'NOT_FOUND', message: `"${str}" is required` };

  if (typeof input !== 'string') return { type: 'INVALID', message: `"${str}" must be a string` };

  if (input.length < 2) {
    return { type: 'INVALID', message: `"${str}" length must be at least 3 characters long` };
  }

  return { type: null, message: '' };
};

export default { productValidation };