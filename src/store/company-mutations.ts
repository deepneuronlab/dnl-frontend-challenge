import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  addCompany: (state, company: Company) => {
    const companyId = new Date().getTime().toString(); // can also use uuid()
    state.companies?.push({ ...company, companyId });
  },
  deleteCompany: (state, companyId: string) => {
    if (state.companies) {
      state.companies = state.companies.filter(stateCompany => stateCompany.companyId != companyId);
    }
  },
  updateCompany: (state, company: Company) => {
    const companyToUpdate = state.companies?.find(
      CompanyItem => CompanyItem.companyId === company.companyId,
    );
    if (companyToUpdate) {
      Object.assign(companyToUpdate, company);
    }
  },
};

export default companiesMutations;
