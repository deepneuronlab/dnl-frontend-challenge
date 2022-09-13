import { GetterTree } from 'vuex';
import { CompaniesState } from '@/types/companies-types';
import { CompanyBaseState } from '@/types/types';

const companiesGetters: GetterTree<CompaniesState, CompanyBaseState> = {
  companyTableHeaders(state) {
    return state.companyTableHeaders;
  },
};

export default companiesGetters;
