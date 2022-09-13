import { InputValidationRule } from 'vuetify';

interface InputValidationRules {
  [key: string]: InputValidationRule;
}

const rules: InputValidationRules = {
  required: (v: string | number | boolean | unknown) => !!v || 'This field is required.',
};

export default rules;
