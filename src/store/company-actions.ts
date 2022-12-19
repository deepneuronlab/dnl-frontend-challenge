import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { CompanyMutationTypes } from './enums/company-mutation-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  saveCompany({ state, commit }, company: Company) {
    const existingCompany = state.companies!.filter(el => el.companyId == company.companyId);

    if (existingCompany.length) {
      // call api to update company
      // for challange only to make it consistent as this will come from api
      company.updatedAt = new Date().toDateString();
      commit(CompanyMutationTypes.UPDATE_COMPANY, company);
    } else {
      // call api to create new company
      // for challange only to make it consistent as this will come from api
      company.companyId = `id${Math.floor(Math.random() * 100)}`;
      company.createdAt = new Date().toDateString();
      company.updatedAt = new Date().toDateString();

      commit(CompanyMutationTypes.ADD_NEW_COMPANY, company);
    }
  },
  updateCompany({ commit }, company: Company) {
    commit(CompanyMutationTypes.UPDATE_COMPANY, company);
  },
  deleteCompany({ commit }, company: Company) {
    commit(CompanyMutationTypes.DELETE_COMPANY, company);
  },
};

export default companiesActions;
