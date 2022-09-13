import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { CompanyBaseState } from '@/types/types';
import companiesStore from './companies/companies-store';

Vue.use(Vuex);

const store: StoreOptions<CompanyBaseState> = {
  modules: {
    companies: companiesStore,
  },
};

export default new Vuex.Store(store);
