import { CompaniesState } from './companies-types';

export interface BaseState {
  companies: CompaniesState;
}

export enum COMPANY_MUTATIONS {
  CREATE = 'create',
  DELETE = 'delete',
  UPDATE = 'update',
}

export enum COMPANY_NAMESPACE_MUTATIONS {
  CREATE = 'company/create',
  DELETE = 'company/delete',
  UPDATE = 'company/update',
}

export enum COMPANY_NAMESPACE_ACTIONS {
  CREATE = 'company/create',
  DELETE = 'company/delete',
  UPDATE = 'company/update',
}
