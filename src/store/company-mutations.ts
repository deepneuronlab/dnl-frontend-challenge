import { map } from 'lodash';
import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  CREATE_COMPANY(state, company: Company) {
    // TODO: Adding company id for have a unique key, this will be removed after the backend implementation.
    company.companyId = Date.now().toString();
    state.companies?.push(company);
  },
  UPDATE_COMPANY(state, company: Company) {
    const theCompany = state.companies?.find(_company => _company.companyId == company.companyId);
    if (theCompany) {
      const formFields = map(state.companyForm, 'key');
      for (const field of formFields) {
        theCompany[field] = company[field];
      }
    }
  },
  REMOVE_COMPANY(state, company: Company) {
    const index = state.companies?.findIndex(_company => _company.companyId == company.companyId);
    if (typeof index === 'number' && index >= 0) {
      state.companies?.splice(index, 1);
    }
  },
};

export default companiesMutations;
