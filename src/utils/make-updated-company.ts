import { Company, NewCompanyFormPayload } from '@/store/companies-types';

function makeUpdatedCompany(formPayload: NewCompanyFormPayload, companyBeforeUpdate: Company) {
  const date = new Date();
  return {
    ...companyBeforeUpdate,
    ...formPayload,
    updatedAt: date.toISOString(),
  } as Company;
}

export default makeUpdatedCompany;
