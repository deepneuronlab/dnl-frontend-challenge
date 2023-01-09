import { MutationTree } from 'vuex';
import { CompaniesState, Company } from '@/store/companies-types';

const companiesMutations: MutationTree<CompaniesState> = {

    createOrUpdateCompany(state, company: Company) {
        const selectedCompany = state.companies?.find(
            existedCompany => existedCompany.companyId === company.companyId,
        );
        const today = new Date();
        if (selectedCompany) {
            const updatedAt = today.toLocaleString('de');
            Object.assign(selectedCompany, { ...company, updatedAt });
        }
        else {
            const companyId = 'id' + (new Date()).getTime();
            const createdAt = today.toLocaleString('de');
            const updatedAt = today.toLocaleString('de');
            state.companies?.push({ ...company, companyId, createdAt, updatedAt });
        }
    },

    deleteCompany(state, company: Company) {
        if (state.companies) {
            state.companies = state.companies?.filter(
                selectedCompany => selectedCompany.companyId !== company.companyId,
            );
        }
    },

};

export default companiesMutations;