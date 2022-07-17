# Show All Companies

Show all companies 

**URL** : `/api/companies/`

**Method** : `GET`

**Query Parameters** : 
```json
{
    "limit": 10, // totals number of items per page
    "page": 2, // page number
}
```

## Success Responses

**Code** : `200 OK`

Based on company data schema being set.

**Content** : 
```json
{
    "data": {
        "totalCount": 30, // total number of companies
        "pageCount": 2,
        "items":[
            {
            "companyId": "id1",
            "className": "company-item",
            "companyName": "Company X",
            "createdAt": "string",
            "updatedAt": "string",
            "language": "de",
            "2020": "good",
            },
            {
            "companyId": "id2",
            "className": "company-item",
            "companyName": "Company Y",
            "createdAt": "string",
            "updatedAt": "string",
            "language": "de",
            "2021": "bad",
            },
            //....
        ],  
    },
    "error": [],
    "status": 200
}
```