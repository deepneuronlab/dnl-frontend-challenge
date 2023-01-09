import { ActionTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { Company } from '@/store/companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  createOrUpdateCompany({ commit }, company: Company) {
    commit('createOrUpdateCompany', company);
  },

  deleteCompany({ commit }, company: Company) {
    commit('deleteCompany', company);
  },
};

export default companiesActions;