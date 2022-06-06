import { ActionTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { Company, CompanyUpdatePayload } from '@/store/companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
    addCompany({ commit }, company: Company) {
        commit('addCompany', company)
    },
    updateCompany({ commit }, payload: CompanyUpdatePayload) {
        commit('updateCompany', payload)
    },
    deleteCompany({ commit }, companyId) {
        commit('deleteCompany', companyId)
    }
};

export default companiesActions;
