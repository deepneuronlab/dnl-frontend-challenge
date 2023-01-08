import { MutationTree } from 'vuex';
import { CompaniesState, Company } from '@/store/companies-types';
//import { formatDate } from '@/utils/formatDate';

//import { v4 as uuidv4 } from 'uuid';

const companiesMutations: MutationTree<CompaniesState> = {
    //generates random id;
    // s4() {
    //     return Math.floor((1 + Math.random()) * 0x10000)
    //             .toString(16)
    //             .substring(1);
    // },
    // newGuid() {
    //     return this.s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    // },
    
    createCompany(state, company: Company) {
        const companyId = "test"; //this.newGuid();
        const createdAt = Date.now().toLocaleString();
        const updatedAt = Date.now().toLocaleString();
        state.companies?.push({ ...company, companyId, createdAt, updatedAt });
    },

    editCompany(state, company: Company) {
        const selectedCompany = state.companies?.find(
            existedCompany => existedCompany.companyId === company.companyId,
        );
        if (selectedCompany) {
            const updatedAt = Date.now().toLocaleString();
            Object.assign(selectedCompany, { ...company, updatedAt });
        }
    },

    deleteCompany(state, id: string) {
        if (state.companies) {
            state.companies = state.companies?.filter(
                selectedCompany => selectedCompany.companyId !== id,
            );
        }
    },

};

export default companiesMutations;