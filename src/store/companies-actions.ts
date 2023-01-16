import cloneDeep from 'lodash/cloneDeep';
import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  saveForm(context) {
    const intermediaryFormData: Partial<Company> = {
      companyId:
        Date.now().toString(36) +
        Math.random()
          .toString(36)
          .substr(2),
      className: 'company-item',
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    };

    const company = { ...intermediaryFormData, ...context.state.companyFormValues } as Company;

    console.log('Submitting new: ', company);

    context.commit('addCompany', company);
  },
  updateCompany(context, companyId: string) {

    const companyIdx = context.state.companies?.findIndex(
      company => company.companyId === companyId,
    );

    if (!context.state.companies || companyIdx === undefined || companyIdx === -1) {
      // show error
      return;
    }

    const newCompanies = cloneDeep(context.state.companies);

    newCompanies[companyIdx] = {
      ...newCompanies[companyIdx],
      // updatedAt: Date.now().toString(),
      ...context.state.companyFormValues,
    };

    context.commit('updateCompanies', newCompanies);
  },
  deleteCompany(context, companyId: string) {
    const foundCompanyIdx = context.state.companies?.findIndex(
      company => company.companyId === companyId,
    );
    if (foundCompanyIdx === undefined || foundCompanyIdx === -1) {
      // show error;
      return;
    }

    context.state.companies?.splice(foundCompanyIdx, 1);
  },
};

export default companiesActions;
