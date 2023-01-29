import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { CompanyFormState } from '@/store/form-types';
import Vue from 'vue';

const companiesMutations: MutationTree<CompaniesState> = {
  create(state, form: CompanyFormState): void {
    // we create the company locally, but most fields will be there from backend.
    const now = getNow();
    const newCompany: Company = {
      companyId: generateCompanyId(),
      className: 'company-item',
      createdAt: now,
      updatedAt: now,
      // companyName is declared as required in Company, so we expect it will be in the form all times
      companyName: '',
    };

    for (const [key, value] of Object.entries(form)) {
      newCompany[key] = value;
    }

    if (!state.companies) {
      state.companies = [];
    }
    state.companies.push(newCompany);
  },
  delete(state, company: Company): void {
    if (!state.companies) {
      return;
    }

    // this could be "just" like state.companies.filter(currentCompany => currentCompany === company), but we probably don't want to create a new array
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
      Vue.set(company, key, value);
    }
    const now = getNow();
    Vue.set(company, 'updatedAt', now);
  },
};

// some naive implementation to generate id
// we can use uuid for better uniqueness or just have it from db or backend
function generateCompanyId(): string {
  return `id${Math.floor(Math.random() * Math.pow(10, 15))}`;
}

function getNow(): string {
  // prettier is way too picky. I don't see any problems with "(new Date()).toISOString();" but he - does.
  const now = new Date();
  return now.toISOString();
}

export default companiesMutations;
