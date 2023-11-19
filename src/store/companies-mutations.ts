import {
  COMPANY_MUTATION_ADD_COMPANY,
  COMPANY_MUTATION_REMOVE_COMPANY,
  COMPANY_MUTATION_UPDATE_COMPANY,
} from './companies-const';
import { CompaniesState, Company } from './companies-types';

const companiesMutations = {
  [COMPANY_MUTATION_ADD_COMPANY]: (state: CompaniesState, payload: { company: Company }) => {
    if (!state.companies) {
      return;
    }

    state.companies.push(payload.company);
  },
  [COMPANY_MUTATION_UPDATE_COMPANY]: (state: CompaniesState, payload: { company: Company }) => {
    if (!state.companies) {
      return;
    }

    const indexCompanyToUpdate = state.companies.indexOf(payload.company);

    if (indexCompanyToUpdate !== -1) {
      state.companies[indexCompanyToUpdate] = payload.company;
    }
  },
  [COMPANY_MUTATION_REMOVE_COMPANY]: (state: CompaniesState, payload: { company: Company }) => {
    if (!state.companies) {
      return;
    }
    const indexCompanyToRemove = state.companies?.indexOf(payload.company);

    if (indexCompanyToRemove !== -1) {
      state.companies.splice(indexCompanyToRemove, 1);
    }
  },
};

export default companiesMutations;
