import getters from '../../../src/store/company-getters';

const companiesState = {
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

describe('company getter', () => {
  it('test that the `companies` getter returns the companies', () => {
    const actual = getters.companies(companiesState);

    expect(actual).toEqual(companiesState.companies);
  });
  it('test that the `companyTableHeaders` getter returns the companies', () => {
    const actual = getters.companyTableHeaders(companiesState);

    expect(actual).toEqual(companiesState.companyTableHeaders);
  });
  it('test that the `companyForm` getter returns the companies', () => {
    const actual = getters.companyForm(companiesState);

    expect(actual).toEqual(companiesState.companyForm);
  });
});
