# DELETE

## Request

* method: `DELETE`
* path: `v1/api/companies/:id`

## Success response example

**Code** : `200 OK`

**Content example**
Based on company data schema being set.

```json
{
      "data": {
            "message": "Company is deleted successfully!"
      },
      "error": [],
      "status": 200
}
```


## Error responses examples

*HTTP status code*: **404** (not found)

    {
      "message": "Company not found",
      "error": true
    }

*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "The server encountered an unexpected condition that prevented it from fulfilling the request.",
      "error":true
    }