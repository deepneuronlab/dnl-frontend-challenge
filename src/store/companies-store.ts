import { Module } from 'vuex';
import getters from './company-getters';
import state from './companies-state';
import { BaseState } from './types';
import { CompaniesState } from './companies-types';
import mutations from './companies-mutations';
import actions from './companies-actions';

export const companiesStore: Module<CompaniesState, BaseState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default companiesStore;
