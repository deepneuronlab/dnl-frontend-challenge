import Vue from 'vue';

export type FormElements = FormRadioButtonGroup | FormSelect | FormTextField;

export type FormWithReset = Vue & { reset: () => void };
export interface FormSelect {
  type: 'selectField';
  key: string;
  label: string;
  items: FormItem[];
  placeholder: string;
  required: boolean;
  value?: FormItem;
}

interface FormTextField {
  type: 'textField';
  key: string;
  label: string;
  placeholder: string;
  required: boolean;
  value?: string;
}

export interface FormRadioButtonGroup {
  type: 'radioGroup';
  key: string;
  label: string;
  items: FormItem[];
  required: boolean;
  value?: string;
}

export interface FormItem {
  text: string;
  value: string;
}
