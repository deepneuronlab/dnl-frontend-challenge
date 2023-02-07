import { ActionContext } from 'vuex';
import { CompaniesState, CompanyFormSerialized, Company } from './companies-types';
import { addCompany, editCompany, loadCompanies, removeCompany } from '@/data';
import { MUTATIONS } from './companies-mutations';
import { BaseState } from './types';
export default {
  async addCompany(
    { commit }: ActionContext<CompaniesState, BaseState>,
    newCompany: CompanyFormSerialized,
  ) {
    await addCompany(newCompany);
    const companies = await loadCompanies();
    commit(MUTATIONS.SET_COMPANIES + '', [...companies]);
  },
  async editCompany({ commit }: ActionContext<CompaniesState, BaseState>, company: Company) {
    await editCompany(company);
    const companies = await loadCompanies();
    commit(MUTATIONS.SET_COMPANIES + '', [...companies]);
  },
  async deleteCompany({ commit }: ActionContext<CompaniesState, BaseState>, company: Company) {
    await removeCompany(company);
    const companies = await loadCompanies();
    commit(MUTATIONS.SET_COMPANIES + '', [...companies]);
  },
};
