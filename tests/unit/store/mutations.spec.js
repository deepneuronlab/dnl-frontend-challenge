import mutations from '@/store/companies-mutations';

let companiesState;

describe('store companies module mutations', () => {
  beforeEach(() => {
    companiesState = {
      companies: [
        {
          companyId: 'id1',
          className: 'company-item',
          companyName: 'Company X',
          createdAt: 'string',
          updatedAt: 'string',
          language: 'de',
          2020: 'good',
        },
        {
          companyId: 'id2',
          className: 'company-item',
          companyName: 'Company Y',
          createdAt: 'string',
          updatedAt: 'string',
          language: 'de',
          2021: 'bad',
        },
        {
          companyId: 'id3',
          className: 'company-item',
          companyName: 'Company Z',
          createdAt: 'string',
          updatedAt: 'string',
          language: 'en',
          2019: 'good',
        },
      ],
      companyTableHeaders: [{ text: 'Name', value: 'companyName' }],
      companyForm: [
        {
          type: 'textField',
          key: 'companyName',
          label: 'Company Name',
          placeholder: 'Type name',
          required: true,
        },
        {
          type: 'selectField',
          key: '2019',
          label: 'Balance 2019',
          placeholder: 'Type',
          required: false,
          items: [
            {
              text: 'Good',
              value: 'good',
            },
            {
              text: 'Bad',
              value: 'bad',
            },
          ],
        },
        {
          type: 'radioGroup',
          key: 'language',
          label: 'Language',
          required: false,
          items: [
            {
              text: 'de',
              value: 'de',
            },
            {
              text: 'en',
              value: 'en',
            },
          ],
        },
      ],
    };
  });

  test('addCompany mutation is adding a company to companiesState', () => {
    const company = {
      id: '1234567',
      className: 'company-item',
      companyName: 'Company Test',
      createdAt: '5 Aug, 2022',
      updatedAt: '8 Aug, 2022',
      language: 'eng',
      2019: 'good',
    };

    mutations.addCompany(companiesState, company);
    expect(companiesState.companies.length).toEqual(4);
  });
  test('deleteCompany mutation is deleting a company from companiesState', () => {
    mutations.deleteCompany(companiesState, 'id3');
    expect(companiesState.companies.length).toEqual(2);
  });
  test('updateCompany mutation is updating a company in companiesState', () => {
    const company = {
      companyId: 'id2',
      className: 'company-item',
      companyName: 'Company Y',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'eng',
      2021: 'bad',
    };
    mutations.updateCompany(companiesState, company);
    expect(companiesState.companies[1].language).toEqual(company.language);
  });
});
