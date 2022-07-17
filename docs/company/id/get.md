# Get Company Detail

Get company detail by id

**URL** : `/api/companies/:id`

**Method** : `GET`


## Success Response

**Code** : `200 OK`

**Content example**

Based on company data schema being set.

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


## Failure Response

**Code** : `404`

**Content example**

```json
{
    "data":{},
    "error":[{
      "message": "Company Not Found"
    }],
    "status": 404
}
```