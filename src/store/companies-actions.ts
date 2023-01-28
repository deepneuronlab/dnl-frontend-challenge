import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';
import { COMPANY_MUTATIONS } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  create({ commit }, company: Company): void {
    // place for api call
    commit(COMPANY_MUTATIONS.CREATE);
  },
  delete({ commit }, company: Company): void {
    // place for api call
    commit(COMPANY_MUTATIONS.DELETE);
  },
  update({ commit }, company: Company): void {
    // place for api call
    commit(COMPANY_MUTATIONS.UPDATE);
  }
};

export default companiesActions;
