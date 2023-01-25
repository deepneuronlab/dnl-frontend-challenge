import { CompaniesState, Company, CompanyForm } from './companies-types';

export const setCompanies = (state: CompaniesState, companies: Company[]) => {
  state.companies = companies;
};

export const setFormStructure = (state: CompaniesState, formStructure: CompanyForm) => {
  state.companyForm = formStructure;
};
