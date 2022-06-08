**getCompanies**
return all companies

- method: Get
- path: `/companies`
- params: 
    - nextPageToken : optional
    - limitPerPage: 

- response: 
  {
    data: {
    nextPageToken: String
    items : Array of Companies
    },
    error: Array of errors if any,
    status: http status code
  }
eg:`
  {
    data:
        {
          nextPageToken: qreasdwadsf13sdf42aeraesadf123
          items: [
            {
              companyId: 'id1',
              className: 'company-item',
              companyName: 'Company X',
              createdAt: 'string',
              updatedAt: 'string',
              language: 'de',
              2020: 'good',
            },...
          ]
      },
    error:[],
    status: 200
  }
    `

**deleteCompanies **
delete all companies

- method: delete
- path: `/companies`
- response:
    {
        data: message,
        error: Array of errors if any,
        status: http status code
      }
- eg: 
    {
        data: Ok,
        error: [],
        status: 200
    }