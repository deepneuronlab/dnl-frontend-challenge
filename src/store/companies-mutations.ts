import { MutationTree } from "vuex";
import { CompaniesState, Company } from "./companies-types";

export const mutationKeys = {
    updateMutations: 'UPDATE_MUTATIONS',
}

const mutations: MutationTree<CompaniesState> = {
    [mutationKeys.updateMutations](state: CompaniesState, payload: Company[]) {
        state.companies = payload;
    }
};

export default mutations;