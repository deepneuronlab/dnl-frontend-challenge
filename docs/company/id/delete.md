# Delete Company

Delete a company by id

**URL** : `/api/companies/:id`

**Method** : `DELETE`


## Success Response

**Code** : `200 OK`

**Content example**
Based on company data schema being set.

```json
{
      "data": {
            "message": "Company Deleted Successfully"
      },
      "error": [],
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
      "message": "Could not delete. Company Not Found"
    }],
    "status": 404
}
```