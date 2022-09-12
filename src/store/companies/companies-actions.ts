import { ActionTree } from 'vuex';
import { CompaniesState } from '@/types/companies-types';
import { BaseState } from '@/types/types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  deleteCompany({ commit }, companyId: string) {
    // Normally we'll have the API calls here like so:
    // const response = $api.delete(`companies/${companyId}`).then(() => commit('DELETE_COMPANY', companyId)).catch(console.error)

    commit('DELETE_COMPANY', companyId);
  },
};

export default companiesActions;
