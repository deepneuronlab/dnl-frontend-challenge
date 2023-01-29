import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { CompanyFormState } from '@/store/form-types';
import Vue from 'vue';

const companiesMutations: MutationTree<CompaniesState> = {
  create(state, company: Company): void {
    console.log('todo create, ', state, company);
  },
  delete(state, company: Company): void {
    if (!state.companies) {
      return;
    }

    // note for devs: this could be "just" like state.companies.filter(currentCompany => currentCompany === company), but we probably don't want to create a new array
    const index = state.companies.indexOf(company);
    if (index === -1) {
      return;
    }

    state.companies.splice(index, 1);
  },
  update(state, payload: [Company, CompanyFormState]): void {
    if (!payload || !Array.isArray(payload) || payload.length !== 2) {
      console.warn('Not enough data to mutate company!');
      return;
    }

    const [company, form] = payload;
    // as we are doing everything locally, we can just mutate existing object
    // in case we have a new one (from api, for instance), we need to implement finding and replacement.
    for (const [key, value] of Object.entries(form)) {
      company[key] = value;
      Vue.set(company, key, value);
    }
  },
};

export default companiesMutations;
