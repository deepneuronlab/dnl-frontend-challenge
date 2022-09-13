import { MutationTree } from 'vuex';
import { CompaniesState, Company } from '@/types/companies-types';

const companiesMutations: MutationTree<CompaniesState> = {
  ADD_COMPANY(state, companyData: Company) {
    state.companies?.push(companyData);
  },
  UPDATE_COMPANY(state, companyData: Company) {
    state.companies = state.companies?.map(company => {
      if (company.companyId === companyData.companyId) {
        return {
          ...companyData,
        };
      }
      return company;
    })!;
  },
  DELETE_COMPANY(state, companyId: string) {
    state.companies = state.companies?.filter(
      company => company.companyId !== companyId,
    ) as Company[];
  },
};

export default companiesMutations;
