export type FormElements = FormRadioButtonGroup | FormSelect | FormTextField;
export type FormElementType = 'selectField' | 'textField' | 'radioGroup';

export interface FormFieldBase {
  type: FormElementType;
  key: string;
  label: string;
  required: boolean;
}

export interface FormSelect extends FormFieldBase {
  type: 'selectField';
  items: FormItem[];
  placeholder: string;
}

interface FormTextField extends FormFieldBase {
  type: 'textField';
  placeholder: string;
}

export interface FormRadioButtonGroup extends FormFieldBase {
  type: 'radioGroup';
  items: FormItem[];
}

export interface FormItem {
  text: string;
  value: string;
}
