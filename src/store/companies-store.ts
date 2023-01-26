import { Module } from 'vuex';
import getters from './company-getters';
import mutations from './company-mutations';
import state from './companies-state';
import { BaseState } from './types';
import { CompaniesState } from './companies-types';

export const companiesStore: Module<CompaniesState, BaseState> = {
  namespaced: true,
  state,
  getters,
  mutations,
};

export default companiesStore;
