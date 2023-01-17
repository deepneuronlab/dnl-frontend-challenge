import cloneDeep from 'lodash/cloneDeep';
import { MutationTree } from 'vuex';
import { defaultCompanyForm } from './companies-state';
import { CompaniesState, Company } from './companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  addCompany(state, company: Company) {
    state.companies?.push(company);
  },
  updateCompanies(state, companies) {
    state.companies = companies;
  },
  deleteCompany(state, companyIndex: number) {
    state.companies?.splice(companyIndex, 1);
  },
  setFormStructure(state, payload) {
    state.companyForm = cloneDeep([...payload]);
  },
  setDefaultFormStructure(state) {
    state.companyForm = cloneDeep([...defaultCompanyForm]).map(v => ({ ...v, value: '' }));
  },
  setFormValue(state, payload) {
    if (!state?.companyForm) return;
    const structureIdx = state.companyForm.findIndex(el => el.key === payload.key);
    if (structureIdx === -1) {
      // update error state
      return;
    }

    state.companyForm[structureIdx].value = payload.newValue;
  },
};

export default companiesMutations;
