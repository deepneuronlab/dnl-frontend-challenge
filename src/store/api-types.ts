import { FormElements } from './form-types';

export type GetFormStructureRequest = {
  companyId: string;
};

export type GetFormStructureResponse = {
  formStructure: FormElements[];
};
