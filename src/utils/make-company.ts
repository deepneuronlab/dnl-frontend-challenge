import { nanoid } from 'nanoid';
import { Company, NewCompanyFormPayload } from '@/store/companies-types';

function makeCompany(formPayload: NewCompanyFormPayload) {
  const date = new Date();
  return {
    companyId: nanoid(),
    updatedAt: date.toISOString(),
    createdAt: date.toISOString(),
    className: 'company-item',
    ...formPayload,
  } as Company;
}

export default makeCompany;
