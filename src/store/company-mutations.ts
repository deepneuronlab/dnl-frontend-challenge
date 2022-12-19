import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { CompanyMutationTypes } from './enums/company-mutation-types'


export type Mutations<S = CompaniesState> = {
    [CompanyMutationTypes.ADD_NEW_COMPANY](state: S, payload: Company): void
    [CompanyMutationTypes.UPDATE_COMPANY](state: S, payload: Company): void
    [CompanyMutationTypes.DELETE_COMPANY](state: S, payload: Company): void
}

const companiesMutations: MutationTree<CompaniesState> & Mutations = {
    [CompanyMutationTypes.ADD_NEW_COMPANY](state, company: Company) {
        state.companies!.push(company)
    },
    [CompanyMutationTypes.UPDATE_COMPANY](state, company: Company) {
        state.companies = [
            ...state.companies!.filter((element: Company) => element.companyId !== company.companyId),
            company
        ]
    },
    [CompanyMutationTypes.DELETE_COMPANY](state, company: Company) {
        state.companies!.splice(state.companies!.indexOf(company), 1);
    },
};

export default companiesMutations;