import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  saveForm(context) {
    const formElements = context.state.companyForm ?? [];
    if (formElements?.length === 0) return;

    const intermediaryFormData: Partial<Company> = {
      companyId: 'asd',
      className: 'company-item',
      createdAt: Date.now().toString(),
      updatedAt: Date.now().toString(),
    };
    formElements.forEach(el => {
      if (el.key && el.value) intermediaryFormData[el.key] = el.value;
    });

    const company = { ...intermediaryFormData } as Company;

    console.log('Submitting new: ', company);

    context.commit('addCompany', company);
  },
};

export default companiesActions;
