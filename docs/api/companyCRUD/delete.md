# GET companies

## Request

* method: `DELETE`
* path: `/api/companies/:id`

## Success response example

*HTTP status code*: **204** (no content) 

//to reduce the traffic load, simply tell the client the deletion is complete (204 status code) and return no response body (as the resource has been deleted)



## Error responses examples

*HTTP status code*: **404** (not found)

    {
      "message": "Company not found",
      "error": true
    }

*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "Something went wrong",
      "error":true
    }