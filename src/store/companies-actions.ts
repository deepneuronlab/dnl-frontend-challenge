import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';
import { COMPANIES_MUTATIONS } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  create({ commit }, company: Company): void {
    // place for api call
    if (!company) {
      console.warn('No company to create!');
      return;
    }

    commit(COMPANIES_MUTATIONS.CREATE, company);
  },
  delete({ commit }, company: Company): void {
    if (!company) {
      console.warn('No company to delete!');
      return;
    }
    // place for api call
    commit(COMPANIES_MUTATIONS.DELETE, company);
  },
  update({ commit }, company: Company): void {
    // place for api call
    if (!company) {
      console.warn('No company to update!');
      return;
    }

    commit(COMPANIES_MUTATIONS.UPDATE, company);
  }
};

export default companiesActions;
