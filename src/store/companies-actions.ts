import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';
import { COMPANIES_MUTATIONS } from './types';
import { CompanyFormState } from '@/store/form-types';

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
  update({ commit }, payload: [Company, CompanyFormState]): void {
    // place for api call
    if (!payload || !Array.isArray(payload) || payload.length !== 2) {
      console.warn('Not enough data to call an update action!');
      return;
    }

    commit(COMPANIES_MUTATIONS.UPDATE, payload);
  },
};

export default companiesActions;
