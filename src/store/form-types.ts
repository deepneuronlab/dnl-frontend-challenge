export type FormElements = FormRadioButtonGroup | FormSelect | FormTextField;

export interface FormSelect {
  type: 'selectField';
  key: string;
  label: string;
  items: FormItem[];
  placeholder: string;
  required: boolean;
  value?: string | number;
}

type RuleFunction = (value: string) => string | boolean;

export interface FormRule {
  [key: string]: Array<RuleFunction>;
}

export interface FormTextField {
  type: 'textField';
  key: string;
  label: string;
  placeholder: string;
  required: boolean;
  value?: string | number;
}

export interface FormRadioButtonGroup {
  type: 'radioGroup';
  key: string;
  label: string;
  items: FormItem[];
  required: boolean;
  value?: string | number;
}

export interface FormItem {
  text: string;
  value: string;
}
