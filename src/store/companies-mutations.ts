import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  addCompany(state, company: Company) {
    state.companies?.push(company);
  },
  updateCompanies(state, companies) {
    state.companies = companies;
  },
  deleteCompany(state, companyIndex: number) {
    state.companies?.splice(companyIndex, 1);
  }
};

export default companiesMutations;
