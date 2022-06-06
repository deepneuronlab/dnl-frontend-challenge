import { MutationTree } from 'vuex';
import { CompaniesState, Company } from '@/store/companies-types';

interface CompanyUpdatePayload {
    index: number;
    updatedCompany: Company
}

const companiesMutations: MutationTree<CompaniesState> = {
    addCompany(state: CompaniesState, company: Company) {
        state.companies = [company, ...state.companies as Company[]]
    },
    updateCompany(state: CompaniesState, payload: CompanyUpdatePayload) {
        state.companies?.splice(payload.index, 1, payload.updatedCompany)
    },
    deleteCompany(state: CompaniesState, index) {
        state.companies?.splice(index, 1)
    }
};

export default companiesMutations;
