import { ActionTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { Company } from '@/store/companies-types';
import { BaseState } from './types';
import ACTIONS from './constants/actions';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  addCompany({ commit }, company: Company) {
    commit(ACTIONS.ADD_COMPANY, company);
  },
  deleteCompany({ commit }, companyId) {
    commit(ACTIONS.DELETE_COMPANY, companyId);
  },
  updateCompany({ commit }, company: Company) {
    commit(ACTIONS.UPDATE_COMPANY, company);
  },
};

export default companiesActions;
