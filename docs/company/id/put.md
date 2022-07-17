# Edit Company

Edit existing company by id

**URL** : `/api/companies/:id`

**Method** : `PUT`

**Data constraints**
Data are validated against the defined dynamic schema of the company.

Example:
```json
{
   
      "companyName": "Company X", // required | name of the company
      "language": "de", // required | available options: de, en
      "2020": "good", // required | available options: "good", "bad"
}
```

## Success Response

**Code** : `200 OK`

**Content example**

```json
{
    "data":{
      "companyId": "id1",
      "className": "company-item",
      "companyName": "Company X",
      "createdAt": "string",
      "updatedAt": "string",
      "language": "de",
      "2020": "good",
      },
    "error":[],
    "status": 200
}
```