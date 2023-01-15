import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  updateFormValue(state, payload: { key: string; value: string }) {
    if (!state.companyFormValues) return;
    state.companyFormValues[payload.key] = payload.value;
  },
  addCompany(state, payload: Company) {
    state.companies?.push(payload);
  },
};

export default companiesMutations;
