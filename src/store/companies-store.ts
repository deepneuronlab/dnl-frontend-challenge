import { Module } from 'vuex';
import getters from './company-getters';
import state from './companies-state';
import * as actions from './company-actions';
import * as mutations from './companies-mutations';
import { BaseState } from './types';
import { CompaniesState } from './companies-types';

export const companiesStore: Module<CompaniesState, BaseState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default companiesStore;
