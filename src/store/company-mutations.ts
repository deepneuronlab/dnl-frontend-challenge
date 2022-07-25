import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  addCompany: (state, payload: Company) => {
    // mutate state
    const UniqId = (new Date().getTime() * Math.random() * 100000000).toString(); // generate unique id for the new company
    state.companies?.push({ ...payload, companyId: UniqId });
  },
  deleteCompany: (state, payload: Company) => {
    state.companies =
      state.companies?.filter(CompanyItem => CompanyItem.companyId != payload.companyId) || null;
  },
  updateCompany: (state, payload: Company) => {
    const companyToUpdate = state.companies?.find(
      CompanyItem => CompanyItem.companyId === payload.companyId,
    );
    if (companyToUpdate) {
      Object.assign(companyToUpdate, payload);
    }
  },
};

export default companiesMutations;
