import { GetterTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';

const companiesGetters: GetterTree<CompaniesState, BaseState> = {
  companies(state) {
    return state.companies;
  },
  companyTableHeaders(state) {
    return state.companyTableHeaders;
  },
  companyForm(state) {
    return state.companyForm;
  },
  companyById(state) {
    return (companyId: string) => {
      return state.companies?.find(o => o.id === companyId)
    }
  }
};

export default companiesGetters;
