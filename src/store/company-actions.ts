import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';
// import companies from '@/api/companies';

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

  // Sample implementation with api, we can use async/await also
  // async deleteCompany({ commit }, company: Company) {
  //   return companies.delete(company.companyId).then(() => {
  //     commit('DELETE_COMPANY', company);
  //   });
  // },
};

export default companiesActions;
