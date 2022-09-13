import { InputValidationRule } from 'vuetify';

interface InputValidationRules {
  [key: string]: InputValidationRule;
}

const rules: InputValidationRules = {
  required: (v: any) => !!v || 'This field is required.',
};

export default rules;
