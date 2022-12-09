import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const mutations: MutationTree<CompaniesState> = {
  add(state, company: Company) {
    state.companies = Array.from([Object.assign({}, company), ...(state?.companies || [])]);
  },
  update(state, company: Company) {
    Object.assign(state?.companies?.find(_c => _c.companyId == company.companyId) || {}, company);
  },
  remove(state, { companyId }: Company) {
    state.companies = state.companies?.filter(_c => _c.companyId != companyId) || null;
  },
};

export default mutations;
