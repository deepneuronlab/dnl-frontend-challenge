import { MutationTree } from 'vuex';
import { CompaniesState, Company, CompanyUpdatePayload } from '@/store/companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
    addCompany(state: CompaniesState, company: Company) {
        state.companies = [company, ...state.companies as Company[]]
    },
    updateCompany(state: CompaniesState, payload: CompanyUpdatePayload) {

        const index = state.companies?.findIndex(company => {
            return company.companyId == payload.companyId
        }) as number

        if (index >= 0) {
            state.companies?.splice(index, 1, { ...payload.updatedCompany })
        }

    },
    deleteCompany(state: CompaniesState, companyId) {
        const index = state.companies?.findIndex(company => {
            return company.companyId == companyId
        }) as number

        if (index >= 0) {
            state.companies?.splice(index, 1)
        }
    }
};

export default companiesMutations;
