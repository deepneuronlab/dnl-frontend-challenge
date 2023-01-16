import { API } from '@/api';
import cloneDeep from 'lodash/cloneDeep';
import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  saveForm(context, payload) {
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

    const company = { ...intermediaryFormData, ...payload } as Company;

    context.commit('addCompany', company);
  },
  updateCompany(context, { companyId, formValues }: { companyId: string; formValues: {} }) {
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
      ...formValues,
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

    context.commit('deleteCompany', foundCompanyIdx);
  },

  async getFormStructureFromServer(context, companyId: string) {
    context.commit('loading', true);

    // const formStructure =
    await API.company
      .getFormStructure({ companyId })
      .then(res => {
        context.commit('saveFormStructure', res.formStructure);
      })
      .catch(err => {
        context.commit('showError', err);
      });
  },
};

export default companiesActions;
