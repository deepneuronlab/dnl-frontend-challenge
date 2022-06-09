**getCompany**
return a company

- method: Get
- path: `/company/:id`
- params: 
  - id: comapnyId

- response: 
  {
    data: company,
    error: Array of errors if any,
    status: http status code
  }
eg:`
  {
    data:
      {
        companyId: 'id1',
        className: 'company-item',
        companyName: 'Company X',
        createdAt: 'string',
        updatedAt: 'string',
        language: 'de',
        2020: 'good',
      },
    error:[],
    status: 200
  }
    `

**updateCompany**
updates a company

- method: PUT/POST
- path: `/company/:id`
- params: 
  - comapny : object having updates and id for a company

- response: 
  {
    data: company,
    error: Array of errors if any,
    status: http status code
  }
eg:`
  {
    data:
      {
        companyId: 'id1',
        className: 'company-item',
        companyName: 'Company X',
        createdAt: 'string',
        updatedAt: 'string',
        language: 'de',
        2020: 'good',
      },
    error:[],
    status: 200
  }
    `

**deleteCompany**
deletes a company

- method: DELETE
- path: `/company/:id`
- params: 
  - id: comapnyId

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


**creatCompany**
creates a company

- method: POST
- path: `/companies`
- params: 
  - comapny : object having data for new company

- response: 
  {
    data: company,
    error: Array of errors if any,
    status: http status code
  }
eg:`
  {
    data:
      {
        companyId: 'id1',
        className: 'company-item',
        companyName: 'Company X',
        createdAt: 'string',
        updatedAt: 'string',
        language: 'de',
        2020: 'good',
      },
    error:[],
    status: 201
  }
    `