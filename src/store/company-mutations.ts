import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  addCompany(state, company: Company) {
    if (state.companies) {
      state.companies?.unshift(company);
    } else {
      state.companies = [company];
    }
    console.log('Companies: ', state.companies);
  },

  updateCompany(state, company: Company) {
    const companyIndex = state.companies?.findIndex(elm => elm.companyId === company.companyId);

    if (typeof companyIndex !== 'undefined') {
      state.companies?.splice(companyIndex, 1, company);
      console.log('Companies: ', state.companies);
    }
  },

  deleteCompany(state, companyId: string) {
    const companyIndex = state.companies?.findIndex(elm => elm.companyId === companyId);

    if (typeof companyIndex !== 'undefined') {
      state.companies?.splice(companyIndex, 1);
      console.log('Companies: ', state.companies);
    }
  },
};

export default companiesMutations;
