import { MutationTree } from 'vuex';
import { CompaniesState, Company } from '@/store/companies-types';
import { formatDate } from '@/utils/formatDate';

import { v4 as uuidv4 } from 'uuid';

const companiesMutations: MutationTree<CompaniesState> = {
  /**
   *
   * @param state
   * @param company
   */
  addCompany(state, company: Company) {
    const companyId = uuidv4();
    const createdAt = formatDate(Date.now());
    const updatedAt = formatDate(Date.now());
    state.companies?.push({ ...company, companyId, createdAt, updatedAt });
  },
  /**
   *
   * @param state
   * @param company
   */
  updateCompany(state, company: Company) {
    const selectedCompany = state.companies?.find(
      existedCompany => existedCompany.companyId === company.companyId,
    );
    if (selectedCompany) {
      const updatedAt = formatDate(Date.now());
      Object.assign(selectedCompany, { ...company, updatedAt });
    }
  },
  /**
   *
   * @param state
   * @param id
   */
  deleteCompany(state, id: string) {
    if (state.companies) {
      state.companies = state.companies?.filter(
        selectedCompany => selectedCompany.companyId !== id,
      );
    }
  },
};

export default companiesMutations;
