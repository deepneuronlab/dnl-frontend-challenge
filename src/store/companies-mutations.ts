import { MutationTree } from "vuex";
import { CompaniesState, Company } from "./companies-types";

export const mutationKeys = {
    updateCompanies: 'UPDATE_MUTATIONS',
}

const mutations: MutationTree<CompaniesState> = {
    [mutationKeys.updateCompanies](state: CompaniesState, payload: Company[]) {
        state.companies = payload;
    }
};

export default mutations;