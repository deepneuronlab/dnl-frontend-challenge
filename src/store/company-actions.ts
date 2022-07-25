import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  addCompany: (context, newCompany: Company) => {
    context.commit('addCompany', newCompany);
  },
  deleteCompany: (context, company: Company) => {
    context.commit('deleteCompany', company);
  },
  updateCompany: (context, company: Company) => {
    context.commit('updateCompany', company);
  },
};

export default companiesActions;
