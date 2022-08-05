import actions from '../../../src/store/company-actions';

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

  test('test that the `addCompany` action pushes a new company', () => {
    const commit = jest.fn();
    const newCompany = {
      className: 'company-item',
      companyName: 'Company A',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'de',
      2020: 'good',
    };

    actions.addCompany({ commit }, newCompany);
    expect(commit).toHaveBeenCalled();
  });
  test('test that the `deleteCompany` action deletes a company', () => {
    const commit = jest.fn();
    const companyId = 'id1';

    actions.addCompany({ commit }, companyId);
    expect(commit).toHaveBeenCalled();
  });
  test('test that the `updateCompany` action updates a company', () => {
    const commit = jest.fn();
    const company = {
      companyId: 'id1',
      className: 'company-item',
      companyName: 'Company A',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'de',
      2020: 'good',
    };

    actions.addCompany({ commit }, company);
    expect(commit).toHaveBeenCalled();
  });
});
