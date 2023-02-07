import { CompaniesState, Company } from './companies-types';
export enum MUTATIONS {
  SET_COMPANIES,
}
export default {
  [MUTATIONS.SET_COMPANIES](state: CompaniesState, companies: Company[]) {
    state.companies = companies;
  },
};
