import { ActionTree } from 'vuex';
import { CompaniesState, Company } from '@/types/companies-types';
import { CompanyBaseState } from '@/types/types';

const companiesActions: ActionTree<CompaniesState, CompanyBaseState> = {
  createCompany({ commit, state }, companyData: Company) {
    // In the real app we would send a request and wait for the result and then set company data
    const completeCompanyData: Company = {
      ...companyData,
      companyId: `id${(state.companies as Company[]).length + 1}`,
    };
    commit('ADD_COMPANY', completeCompanyData);
  },
  updateCompany({ commit }, companyData: Company) {
    commit('UPDATE_COMPANY', companyData);
  },
  deleteCompany({ commit }, companyId: string) {
    // Normally we'll have the API calls here like so:
    // const response = await $api.delete(`companies/${companyId}`).then(() => commit('DELETE_COMPANY', companyId)).catch(console.error)

    commit('DELETE_COMPANY', companyId);
  },
};

export default companiesActions;
