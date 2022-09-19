import { FormElements } from '@/store/form-types';

export interface CompaniesState {
  companies: Company[] | null;
  companyTableHeaders: CompanyTableHeaderItem[] | null;
  companyForm: CompanyForm | null;
  companyFormData: CompanyFormData;
}

export interface Company {
  companyId: string;
  companyName: string;
  createdAt: string;
  updatedAt: string;
  className: string;
  [key: string]: string | number | boolean | Record<string, string>;
}

export interface CompanyTableHeaderItem {
  text: string | number;
  value: string | number;
}

export type CompanyForm = FormElements[];

export type CompanyFormData = Record<string, Company>;
