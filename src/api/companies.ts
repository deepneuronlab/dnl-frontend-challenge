import { Company } from '@/store/companies-types';
import httpClient from './axios';

const COMPANIES_URL = '/companies';

export default {
  get() {
    return httpClient.get(COMPANIES_URL);
  },
  post(companyData: Company) {
    return httpClient.post(COMPANIES_URL, companyData);
  },
  put(companyId: string, companyData: Company) {
    return httpClient.put(`${COMPANIES_URL}/${companyId}`, companyData);
  },
  delete(companyId: string) {
    return httpClient.delete(`${COMPANIES_URL}/${companyId}`);
  },
};
