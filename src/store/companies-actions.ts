import { ActionTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { Company } from '@/store/companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  /**
   *
   * @param commit
   * @param company
   */
  addCompany({ commit }, company: Company) {
    commit('addCompany', company);
  },

  /**
   *
   * @param commit
   * @param payload
   */
  updateCompany({ commit }, data: Company) {
    commit('updateCompany', data);
  },

  /**
   *
   * @param commit
   * @param companyId
   */
  deleteCompany({ commit }, id) {
    commit('deleteCompany', id);
  },
};

export default companiesActions;