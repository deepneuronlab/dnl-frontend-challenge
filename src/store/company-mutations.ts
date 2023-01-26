import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  save(state, payload) {
    if (payload.companyId) {
      // I was sure in a module one can use local name as 'update' without module prefix
      // should actually work with namespaced: true
      this.commit('companies/update', payload);
      return;
    }

    const pseudoId = Math.round((Math.random() * 10) ^ 6);
    return state.companies?.push({
      ...payload,
      companyId: `id${pseudoId}`,
    });
  },
  update(state, payload) {
    const index = state.companies?.findIndex(existing => existing.companyId === payload.companyId);
    if (index && index > -1) {
      state.companies?.splice(index, 1, payload);
    }
  },
  deleteCompany(state, payload: Company) {
    return (state.companies =
      state.companies?.filter(existing => payload.companyId !== existing.companyId) || []);
  },
};

export default companiesMutations;
