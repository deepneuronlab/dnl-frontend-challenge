import { GetterTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { BaseState } from './types';

const companiesGetters: GetterTree<CompaniesState, BaseState> = {
  companies(state) {
    return state.companies;
  },
  companyById: state => (id: string) => {
    return state.companies?.find(company => company.companyId === id);
  },
  companyTableHeaders(state) {
    return state.companyTableHeaders;
  },
  companyForm(state) {
    return state.companyForm;
  },
};

export default companiesGetters;
