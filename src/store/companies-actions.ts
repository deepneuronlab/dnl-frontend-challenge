import { ActionContext, ActionTree } from "vuex";
import { CompaniesState, Company } from "./companies-types";
import { BaseState } from "./types";
import { mutationKeys } from "./companies-mutations";

const actions: ActionTree<CompaniesState, BaseState> = {
    updateCompany: ({ commit, state }: ActionContext<CompaniesState, BaseState>, payload: Company) => {
        const companiesList = _.cloneDeep(state.companies) as Array<Company>;
        const updateIndex = companiesList.findIndex((company) => company.companyId === payload.companyId);
        companiesList.splice(updateIndex, 1, payload);
        commit(mutationKeys.updateCompanies, companiesList);
    },
    deleteCompany: ({ commit, state }: ActionContext<CompaniesState, BaseState>, payload: Company) => {
        const companiesList = _.cloneDeep(state.companies) as Array<Company>;
        const updateIndex = companiesList.findIndex((company) => company.companyId === payload.companyId);
        companiesList.splice(updateIndex, 1);
        commit(mutationKeys.updateCompanies, companiesList);
    },
    createCompany: ({ commit, state }: ActionContext<CompaniesState, BaseState>, payload: Company) => {
        const companiesList = _.cloneDeep(state.companies) as Array<Company>;
        payload.companyId = (new Date()).getTime().toString();
        companiesList.push(payload);
        commit(mutationKeys.updateCompanies, companiesList);
    },
};

export default actions;