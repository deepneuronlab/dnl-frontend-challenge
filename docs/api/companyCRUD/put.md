# GET companies

## Request

* method: `PUT`
* path: `/api/companies`


body:
{
    "companyName": "Company A", // required | name of the company
    "language": "de", available options: de, en (can be put in an ENUM)
    "2019": "good",  available options: "good", "bad" (can be put in an ENUM)
}

## Success response example

*HTTP status code*: **200** (OK)

```body
       
    {
        "companyId": "string id",
        "className": "company-item",
        "companyName": "Company A",
        "createdAt": "string",
        "updatedAt": "string",
        "language": "de",
        "2019": "good",
    }
    

```


## Error responses examples

*HTTP status code*: **400** (Bad Request)

    {
      "message": "Invalid data",
      "errors": [
        {
            "message":"language is invalid",
            "field":"language"
        }
      ]
    }

*HTTP status code*: **500** (Internal Server Error")

    {
      "message": "Something went wrong",
    }