import mutations from '../../../src/store/company-mutations';

let companiesState;

describe('company mutations', () => {
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

  test('test that the `addCompany` mutation pushes a new company', () => {
    const newCompany = {
      className: 'company-item',
      companyName: 'Company A',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'de',
      2020: 'good',
    };

    mutations.addCompany(companiesState, newCompany);
    expect(companiesState.companies.length).toEqual(4);
  });
  test('test that the `deleteCompany` mutation pushes a new company', () => {
    mutations.deleteCompany(companiesState, 'id1');
    expect(companiesState.companies.length).toEqual(2);
  });
  test('test that the `updateCompany` mutation updated a company', () => {
    const newName = 'newName';
    const companyToUpdate = {
      companyId: 'id1',
      className: 'company-item',
      companyName: newName,
      createdAt: 'string',
      updatedAt: 'string',
      language: 'de',
      2020: 'good',
    };
    mutations.updateCompany(companiesState, companyToUpdate);
    expect(companiesState.companies[0].companyName).toEqual(newName);
  });
});
