import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  deleteCompany({ commit }, company: Company) {
    commit('DELETE_COMPANY', company);
  },
  addCompany({ commit }, company: Company) {
    commit('ADD_COMPANY', company);
  },
  editCompany({ commit }, company: Company) {
    commit('EDIT_COMPANY', company);
  },
  getCompanyForm({ state }) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(state.companyForm);
      }, 500);
    });
  },
};

export default companiesActions;
