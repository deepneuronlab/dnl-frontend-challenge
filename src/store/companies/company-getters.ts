import { GetterTree } from 'vuex';
import { CompaniesState } from '@/types/companies-types';
import { BaseState } from '@/types/types';

const companiesGetters: GetterTree<CompaniesState, BaseState> = {
  companyTableHeaders(state) {
    return state.companyTableHeaders;
  },
};

export default companiesGetters;
