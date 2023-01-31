import { ActionTree } from 'vuex';
import { CompaniesState, Company } from './companies-types';
import { BaseState } from './types';
import lodash from 'lodash';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  addCompany(context, partialCompanyRecord: Partial<Company>) {
    const timestamp = new Date().toISOString();
    const company: Company = {
      companyId: lodash.uniqueId(),
      createdAt: timestamp,
      updatedAt: timestamp,
      className: 'company-item',
      companyName: '',
      ...partialCompanyRecord,
    };
    // Make API call 'POST /api/companies' with payload for new company
    // On Success, commit returned company response to state.
    context.commit('addCompany', company);
  },

  updateCompany(context, company: Company) {
    const timestamp = new Date().toISOString();

    const newCompany: Company = {
      ...company,
      updatedAt: timestamp,
    };
    // Make API call 'POST /api/companies/companyId={companyId}' with payload for new company
    // On Success, commit returned company response to state.
    context.commit('updateCompany', newCompany);
  },

  deleteCompany(context, companyId: string) {
    // Make API call 'DELETE /api/companies/companyId={companyId}'
    // On Success, remove company from state
    context.commit('deleteCompany', companyId);
  },
};

export default companiesActions;
