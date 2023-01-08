import { ActionTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { Company } from '@/store/companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  
  addCompany({ commit }, company: Company) {
    commit('createCompany', company);
  },
  updateCompany({ commit }, data: Company) {
    commit('editCompany', data);
  },

  deleteCompany({ commit }, id) {
    commit('deleteCompany', id);
  },
};

export default companiesActions;