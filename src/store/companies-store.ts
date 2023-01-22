import { Module } from 'vuex';
import getters from './company-getters';
import state from './companies-state';
import { BaseState } from './types';
import { CompaniesState } from './companies-types';
import { Company } from './companies-types';

export const companiesStore: Module<CompaniesState, BaseState> = {
  namespaced: true,
  state,
  getters,
  mutations: {
    delete(state, id: string) {
      state.companies = state.companies?.filter(company => company.companyId !== id) as
        | Company[]
        | null;
    },
    add(state, company: Company) {
      state.companies?.push(company);
    },
    update(state, updatedCompany: Company) {
      state.companies = state.companies?.map(company => {
        if (company.companyId === updatedCompany.companyId) {
          return updatedCompany;
        }

        return company;
      }) as Company[];
    },
  },
  actions: {
    delete({ commit }, id) {
      // API call and setting a loading state can go in here
      commit('delete', id);
    },
    add({ commit }, company) {
      // API call and setting a loading state can go in here
      commit('add', company);
    },
    update({ commit }, updatedCompany) {
      // API call and setting a loading state can go in here
      commit('update', updatedCompany);
    },
  },
};

export default companiesStore;
