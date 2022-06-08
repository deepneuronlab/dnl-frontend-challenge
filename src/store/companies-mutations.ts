import { MutationTree } from 'vuex';
import { CompaniesState, Company, CompanyUpdatePayload } from '@/store/companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  addCompany(state: CompaniesState, company: Company) {
    state.companies = [company, ...(state.companies as Company[])];
  },

  updateCompany(state: CompaniesState, payload: CompanyUpdatePayload) {
    const { company } = payload;
    const index = state.companies?.findIndex(company => {
      return company.companyId == payload.companyId;
    }) as number;

    if (index >= 0) {
      const tempCompanies = [...(state.companies as [Company])];
      tempCompanies[index] = company as Company;
      state.companies = tempCompanies;
    }
  },

  deleteCompany(state: CompaniesState, companyId) {
    const { companies } = state;

    const index = companies?.findIndex(company => {
      return company.companyId == companyId;
    }) as number;

    if (index >= 0) {
      state.companies = [
        ...(companies?.slice(0, index) as [Company]),
        ...(companies?.slice(index + 1) as [Company]),
      ];
    }
  },
};

export default companiesMutations;
