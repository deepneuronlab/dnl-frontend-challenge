import { MutationTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  testMutation(state, payload) {
    // console.log(state);
    if (!state.companyForm) return;

    const idx = state.companyForm?.findIndex(v => v.key === payload.key);
    if (idx !== null && idx !== undefined && idx >= 0) {
      state.companyForm[idx].value = payload.value;
    }
  },
  addCompany(state) {
    const formElements = state?.companyForm ?? [];
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
    state.companies?.push(company);
  },
};

export default companiesMutations;
