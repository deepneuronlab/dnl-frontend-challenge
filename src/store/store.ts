import { Company } from './companies-types';
import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { BaseState } from './types';
import companiesStore from './companies-store';

Vue.use(Vuex);

/**
 *  When adding a new company
 *  the data in the store should
 *  actually be updated directly from the backend response
 *  and the company ID should be determined in the backend,
 *  since we are not making API calls at the moment
 *  I've decided to add a random ID based on the current Date in milliseconds.
 *
 * Also the format for the balance should be added from the response, ass {value: string, year: string}
 * I will also modify it manually for showing purposes
 * We only need to send the balance value to the API request as the information of the current balance year is already in the form wich can be infered from the backend
 */

const store: StoreOptions<BaseState> = {
  modules: {
    companies: companiesStore,
  },
  mutations: {
    addNewCompany(state, id) {
      const { balance } = state.companies.companyFormData[id];
      const mockAPIResponse = {
        companyId: JSON.stringify(new Date().getTime()),
        balance: { value: balance as string, year: '2022' }, // this is how the data has been mocked
      };
      const prevStateIndex = state?.companies?.companies?.findIndex(
        company => company.companyId === id,
      ) as number;

      if (prevStateIndex >= 0) {
        state.companies.companies = Object.assign([], state.companies.companies, {
          [prevStateIndex]: {
            ...state.companies.companyFormData[id],
            balance: { value: 'apiValue', year: 'apiYear' },
          },
        });
      } else {
        state.companies.companies = [
          ...(state?.companies?.companies || []),
          {
            ...state.companies.companyFormData[id],
            ...mockAPIResponse,
          },
        ];
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [id]: removedProperty, ...restObject } = state.companies.companyFormData;
      state.companies.companyFormData = restObject;
    },
    editCompanyFormData(state, newFormData: Company) {
      state.companies.companyFormData = {
        ...state.companies.companyFormData,
        [newFormData?.companyId]: newFormData,
      };
    },
    deleteCompany(state, id) {
      state.companies.companies =
        state.companies.companies?.filter(company => company.companyId !== id) || null;
    },
  },
};

export default new Vuex.Store(store);
