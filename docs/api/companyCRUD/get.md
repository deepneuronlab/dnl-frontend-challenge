# GET companies

## Request

* method: `GET`
* path: `/api/companies?page=1&limitPerPage=5`
* params: 
    - `page`: current page number
    - `limitPerPage`: limit on the number of data you view in a given page
        "resultset": {

    we can calculate the "offset" from the 2 info we are given (page and limitPerPage)

## Success response example

*HTTP status code*: **200** (ok)

```json
     {
      "metadata": {
          "page": 1,
          "limitPerPage": 5,
      },
      "data": [
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
        {
            "companyId": "id3",
            "className": "company-item",
            "companyName": "Company Z",
            "createdAt": "string",
            "updatedAt": "string",
            "language": "en",
            "2019": "good",
        },
      ],
    }

```


## Error responses examples

*HTTP status code*: **404** (not found)

    {
      "message": "Not found",
    }

*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "Something went wrong",
    }