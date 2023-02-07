import { Company, CompanyFormSerialized } from '@/store/companies-types';
import companiesState from './store/companies-state';

/**
 * Here I "simulate" all the backend calls.
 * my potential API proposal is in ~/README.MD
 */
let ID_SEQUENCE = 4;
const data = [...(companiesState.companies || [])];

/**
 * this would have been an HTTP PUT, or a POST without an ID
 */
export function addCompany(payload: CompanyFormSerialized): Promise<Company> {
  if (!payload.companyName) {
    return Promise.reject('Expected companyName to be defined');
  } else {
    const newValue = {
      ...payload,
      companyId: `id${ID_SEQUENCE++}`,
      companyName: payload.companyName,
      createdAt: Date.now().toLocaleString(),
      updatedAt: Date.now().toLocaleString(),
      className: 'company-item',
    };
    data.push(newValue);
    return Promise.resolve(newValue);
  }
}
/**
 * a POST with a json payload
 */
export function editCompany(payload: Company): Promise<Company> {
  const idx = data.findIndex(i => i.companyId === payload.companyId);
  if (!idx) {
    return Promise.reject(`Tried to edit a companyId=${payload.companyId} that does not exist`);
  } else {
    data[idx] = payload;
  }
  return Promise.resolve(payload);
}

/**
 * this would be an HTTP DELETE with an id
 */
export function removeCompany(company: Company): Promise<Company> {
  const idx = data.findIndex(i => i.id === company.id);
  data.splice(idx, 1);
  return Promise.resolve(company);
}

export function loadCompanies(): Promise<Company[]> {
  return Promise.resolve(data);
}
