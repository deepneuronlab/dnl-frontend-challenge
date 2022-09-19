/**
 * GET /companies?page=1
 {
  companies: [
    {
      companyId: 'id1',
      className: 'company-item',
      companyName: 'Company X',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'de',
      balance: { value: 'good', year: '2020' },
    },
    {
      companyId: 'id2',
      className: 'company-item',
      companyName: 'Company Y',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'de',
      balance: { value: 'bad', year: '2021' },
    },
    {
      companyId: 'id3',
      className: 'company-item',
      companyName: 'Company Z',
      createdAt: 'string',
      updatedAt: 'string',
      language: 'en',
      balance: { value: 'good', year: '2019' },
    },
  ],
  companyTableHeaders: [
    { text: 'Name', value: 'companyName' },
    { text: 'Language', value: 'language' },
    { text: 'Balance', value: 'balance' },
  ],
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
      key: 'balance',
      label: 'Balance 2022',
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
  }
  */

/**
 * POST /update/
 * If there is company ID the file should be updated with the same Id
 * else should be created and assigned an Id.
 *
  Payload: {
    balance: 'bad' 
    companyId: 'string' 
    companyName: 'string'
    language: 'de'
  }

  Response: {
    companyId: 'id3',
    companyName: 'string',
    createdAt: 'string',
    updatedAt: 'string',
    language: 'de',
    balance: { value: 'bad', year: '2022' },
  }
 */

/**
   * DELETE /companies/:companyId 
   * 
    Payload: {
      copmanyId: 'string'
    }

    Response: {
      status: ok,
    }
   */
