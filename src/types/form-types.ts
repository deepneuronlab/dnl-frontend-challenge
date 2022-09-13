export type FormElements = FormRadioButtonGroup | FormSelect | FormTextField;

export interface FormSelect {
  type: 'selectField';
  key: string;
  label: string;
  items: InputItem[];
  placeholder: string;
  required: boolean;
}

interface FormTextField {
  type: 'textField';
  key: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface FormRadioButtonGroup {
  type: 'radioGroup';
  key: string;
  label: string;
  items: InputItem[];
  required: boolean;
}

export interface InputItem {
  text: string;
  value: string;
}
