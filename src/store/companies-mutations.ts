import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

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
  update(state, company: Company): void {
    console.log('todo update, ', state, company);
  },
};

export default companiesMutations;
