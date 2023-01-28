import { CompaniesState } from './companies-types';
import { FORM_FIELD_TYPE } from './types';

const companiesState: CompaniesState = {
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
      type: FORM_FIELD_TYPE.TEXT,
      key: 'companyName',
      label: 'Company Name',
      placeholder: 'Type name',
      required: true,
    },
    {
      type: FORM_FIELD_TYPE.SELECT,
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
      type: FORM_FIELD_TYPE.RADIO,
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

export default companiesState;
