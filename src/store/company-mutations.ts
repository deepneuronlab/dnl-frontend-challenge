import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import Vue from 'vue';

const companiesMutations: MutationTree<CompaniesState> = {
  ADD_COMPANY(state, company: Company) {
    state.companies?.push(company);
  },
  EDIT_COMPANY(state, company: Company) {
    const companyIndex = state.companies?.findIndex(
      currentCompany => currentCompany.companyId === company.companyId,
    );
    if (companyIndex != undefined && companyIndex >= 0 && state.companies !== null) {
      Vue.set(state.companies, companyIndex, company);
    }
  },
  DELETE_COMPANY(state, company: Company) {
    const companyIndex = state.companies?.findIndex(
      currentCompany => currentCompany.companyId === company.companyId,
    );
    if (companyIndex != undefined && companyIndex >= 0) state.companies?.splice(companyIndex, 1);
  },
};

export default companiesMutations;
