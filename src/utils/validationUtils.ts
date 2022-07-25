const validator = {
  required: (isRequired: boolean, validationMessage: string | undefined = 'required Field') => (
    value: unknown,
  ) => {
    return isRequired ? !!value || validationMessage : true;
  },
};

export default validator;
