import { ActionTree } from 'vuex';
import { CompaniesState } from './companies-types';
import { BaseState } from './types';
import {
  COMPANY_ACTION_ADD_COMPANY,
  COMPANY_ACTION_REMOVE_COMPANY,
  COMPANY_ACTION_UPDATE_COMPANY,
  COMPANY_MUTATION_ADD_COMPANY,
  COMPANY_MUTATION_REMOVE_COMPANY,
  COMPANY_MUTATION_UPDATE_COMPANY,
} from './companies-const';

const companiesActions: ActionTree<CompaniesState, BaseState> = {
  [COMPANY_ACTION_REMOVE_COMPANY]: (context, payload) => {
    context.commit(COMPANY_MUTATION_REMOVE_COMPANY, payload);
  },
  [COMPANY_ACTION_ADD_COMPANY]: (context, payload) => {
    context.commit(COMPANY_MUTATION_ADD_COMPANY, payload);
  },
  [COMPANY_ACTION_UPDATE_COMPANY]: (context, payload) => {
    context.commit(COMPANY_MUTATION_UPDATE_COMPANY, payload);
  },
};

export default companiesActions;
