import { FormElements } from '@/store/form-types';

export interface CompaniesState {
  companies: Company[] | null;
  companyTableHeaders: CompanyTableHeaderItem[] | null;
  companyForm: CompanyForm | null;
}

export interface CompanyArbitraryValues {
  [key: string]: string | number | boolean;
}

export interface Company extends CompanyArbitraryValues {
  companyId: string;
  companyName: string;
  createdAt: string;
  updatedAt: string;
  className: string;
}

export interface CompanyTableHeaderItem {
  text: string | number;
  value: string | number;
}
export type CompanyForm = FormElements[];
