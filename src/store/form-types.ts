import { FORM_FIELD_TYPE } from './types';

export type FormElements = FormRadioButtonGroup | FormSelect | FormTextField;

export interface FormSelect {
  type: FORM_FIELD_TYPE.SELECT;
  key: string;
  label: string;
  items: FormItem[];
  placeholder: string;
  required: boolean;
}

interface FormTextField {
  type: FORM_FIELD_TYPE.TEXT;
  key: string;
  label: string;
  placeholder: string;
  required: boolean;
}

export interface FormRadioButtonGroup {
  type: FORM_FIELD_TYPE.RADIO;
  key: string;
  label: string;
  items: FormItem[];
  required: boolean;
}

export interface FormItem {
  text: string;
  value: string;
}

export interface CompanyFormState {
  [key: string]: string | number | boolean;
}
