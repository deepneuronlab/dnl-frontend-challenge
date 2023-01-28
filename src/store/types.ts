import { CompaniesState } from './companies-types';

export interface BaseState {
  companies: CompaniesState;
}

export enum COMPANIES_MUTATIONS {
  CREATE = 'create',
  DELETE = 'delete',
  UPDATE = 'update',
}

export enum COMPANIES_NAMESPACE_MUTATIONS {
  CREATE = 'companies/create',
  DELETE = 'companies/delete',
  UPDATE = 'companies/update',
}

export enum COMPANIES_NAMESPACE_ACTIONS {
  CREATE = 'companies/create',
  DELETE = 'companies/delete',
  UPDATE = 'companies/update',
}

export enum FORM_FIELD_TYPE {
  SELECT = 'selectField',
  TEXT = 'textField',
  RADIO = 'radioGroup',
}
