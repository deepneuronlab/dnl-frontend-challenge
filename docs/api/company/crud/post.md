#POST

**URL** : `v1/api/companies/`

**Method** : `POST`


Example:

```json 
{
      "companyName": "Company T", 
      "language": "eng", 
      "2022": "good", 
}
```

## Success Response Example

**Code** : `200`

**Content example**

```json
{
    "data":{
      "companyId": "id4",
      "className": "company-item",
      "companyName": "Company T",
      "createdAt": "string",
      "updatedAt": "string",
      "language": "eng",
      "2022": "good"
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