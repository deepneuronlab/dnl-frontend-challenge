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
  companyForm(state) {
    return state.companyForm;
  },
  formValues(state) {
    return state.companyFormValues;
  },
};

export default companiesGetters;
