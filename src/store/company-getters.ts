import { GetterTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { BaseState } from './types';

const companiesGetters: GetterTree<CompaniesState, BaseState> = {
  /**
   *
   * @param state
   */
  companies(state) {
    return state.companies;
  },
  /**
   *
   * @param state
   */
  companyTableHeaders(state) {
    return state.companyTableHeaders;
  },
  /**
   *
   * @param state
   */
  companyForm(state) {
    return state.companyForm
  }
};

export default companiesGetters;
