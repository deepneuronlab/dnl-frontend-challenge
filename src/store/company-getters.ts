import { GetterTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { BaseState } from './types';

const companiesGetters: GetterTree<CompaniesState, BaseState> = {
  companies(state) {
    return state.companies;
  },
  companyTableHeaders(state) {
    return state.companyTableHeaders;
  },
  companyById(state) {
    return (companyId: string) => {
      return state.companies?.find(o => o.companyId === companyId);
    };
  },
  companyForm(state) {
    return state.companyForm;
  },
};

export default companiesGetters;
