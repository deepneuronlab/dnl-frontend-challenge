#PUT

Edit existing company by id

**URL** : `v1/api/companies/:id`

**Method** : `PUT`


Example Body:
```json
{
   
      "companyName": "Company X", 
      "language": "eng", 
      "2022": "bad", 
}
```

## Success Response Example

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
      "language": "eng",
      "2022": "bad",
      },
    "error":[],
    "status": 200
}
```

## Error Response Examples

*HTTP status code*: **404**

In case of a bad payload

    {
      "message": "Company name is required",
      "error": true
    }

*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
      "error":true
    }