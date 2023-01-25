import { Commit, Dispatch } from 'vuex';
import { Company } from './companies-types';

const API_ROUTE = 'http://localhost:3000';

export const fetchCompanies = async ({ commit }: { commit: Commit }) => {
  return fetch(`${API_ROUTE}/companies`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.error('Failed to fetch companies', res);
        throw new Error('Failed to fetch companies');
      }
    })
    .then(companies => commit('setCompanies', companies));
};

export const fetchFormStructure = async ({ commit }: { commit: Commit }, companyId: string) => {
  return fetch(`${API_ROUTE}/forms/${companyId}`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else if (res.status === 404) {
        console.log('Fetching default form structure');
        return fetch(`${API_ROUTE}/forms/default`).then(res => {
          if (res.ok) {
            return res.json();
          } else {
            throw new Error('Failed to fetch form for company');
          }
        });
      } else {
        throw new Error('Failed to fetch form for company');
      }
    })
    .then(companyForm => {
      commit('setFormStructure', companyForm.formStructure);
    });
};

export const addCompany = async ({ dispatch }: { dispatch: Dispatch }, company: Company) => {
  return fetch(`${API_ROUTE}/companies/`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(company),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Failed to add company');
      }
    })
    .then(() => dispatch('fetchCompanies'));
};

export const saveCompany = async ({ dispatch }: { dispatch: Dispatch }, company: Company) => {
  return fetch(`${API_ROUTE}/companies/${company.id}`, {
    method: 'PUT',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(company),
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Failed to edit company');
      }
    })
    .then(() => dispatch('fetchCompanies'));
};

export const deleteCompany = async ({ dispatch }: { dispatch: Dispatch }, company: Company) => {
  return fetch(`${API_ROUTE}/companies/${company.id}`, {
    method: 'DELETE',
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Failed to delete company');
      }
    })
    .then(() => dispatch('fetchCompanies'));
};
