import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  createCompany({ commit }, company: Company) {
    commit('CREATE_COMPANY', company);
  },
  updateCompany({ commit }, company: Company) {
    commit('UPDATE_COMPANY', company);
  },
  removeCompany({ commit }, company: Company) {
    commit('REMOVE_COMPANY', company);
  },
};

export default companiesActions;
