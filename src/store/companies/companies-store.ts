import { Module } from 'vuex';
import { CompanyBaseState } from '@/types/types';
import { CompaniesState } from '@/types/companies-types';
import getters from './company-getters';
import state from './companies-state';
import actions from './companies-actions';
import mutations from './companies-mutations';

export const companiesStore: Module<CompaniesState, CompanyBaseState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};

export default companiesStore;
