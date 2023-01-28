import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  create(state, company: Company): void {
    console.log('todo create, ', state, company);
  },
  delete(state, company: Company): void {
    console.log('todo delete, ', state, company);
  },
  update(state, company: Company): void {
    console.log('todo update, ', state, company);
  },
};

export default companiesMutations;
