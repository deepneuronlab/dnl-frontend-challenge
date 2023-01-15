import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  saveForm(context) {
    const intermediaryFormData: Partial<Company> = {
      companyId: 'asd',
      className: 'company-item',
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    };

    const company = { ...intermediaryFormData, ...context.state.companyFormValues } as Company;

    console.log('Submitting new: ', company);

    context.commit('addCompany', company);
  },
  deleteCompany(context, companyId: string) {
    const foundCompanyIdx = context.state.companies?.findIndex(
      company => company.companyId === companyId,
    );
    if (foundCompanyIdx === undefined || foundCompanyIdx === -1) return;

    context.state.companies?.splice(foundCompanyIdx, 1);
  },
};

export default companiesActions;
