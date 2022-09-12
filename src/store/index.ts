import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { BaseState } from '@/types/types';
import companiesStore from './companies/companies-store';

Vue.use(Vuex);

const store: StoreOptions<BaseState> = {
  modules: {
    companies: companiesStore,
  },
};

export default new Vuex.Store(store);
