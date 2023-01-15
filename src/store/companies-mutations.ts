import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  updateFormValue(state, formItem: { key: string; value: string }) {
    if (!state.companyFormValues) return;
    state.companyFormValues[formItem.key] = formItem.value;
  },
  addCompany(state, company: Company) {
    state.companies?.push(company);
  },
  updateCompanies(state, companies) {
    state.companies = companies;
  },
};

export default companiesMutations;
