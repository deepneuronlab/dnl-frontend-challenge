#Methods

## **-Get All**

**URL** :  `v1/api/companies`

**Method** :  'GET'

### **Response Types**

**Success**

**Code** : "200"

Response Example :

```json
{
  "data":[
    {
      "companyId": "id1",
      "className": "company-item",
      "companyName": "Company X",
      "createdAt": "string",
      "updatedAt": "string",
      "language": "de",
      "2022": "good"
    },
    {
      "companyId": "id2",
      "className": "company-item",
      "companyName": "Company Y",
      "createdAt": "string",
      "updatedAt": "string",
      "language": "de",
      "2022": "bad"
    }
  ],


  "error":[],
  "status": 200
}
```


**Failure**

## Error Response Examples


*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
      "error":true
    }


## **-Get Company By ID**

Get company detail by id

**URL** : `v1/api/companies/:id`

**Method** : `GET`


## Success Response

**Code** : `200`

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
      "language": "eng",
      "2022": "bad"
      },
    "error":[],
    "status": 200
}
```
## Error Response Examples

*HTTP status code*: **404**

In case of a bad payload

    {
      "message": "Company id is not found",
      "error": true
    }

*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
      "error":true
    }
