# Submission

## Tasks
- [x] Get the DynamicForm working with the provided data structure in the store
- [x] Update the store according to the changes in the form, so the data is consistent
- [x] Write the API documentation for the endpoints that you would need to connect the app to the backend

## Stuff To Do
- [x] use dynamic components in Dynamic form
- [ ] support vuetify components generically
- [ ] Validate with Vuelidate
- [ ] Better Typescript in Components
- [ ] Write Unit tests
- [ ] Integerate with mock API server

# API Documentation

### Common Headers
Note: All Endpoints have to send the following Header(s)
> ```
>   Content-Type: application/json 
>   Authorization: Bearer <jwt token>
> ```

### Common Responses
Following responses are common across most of the following endpoints:
- `401 Unauthorized`: Invalid or expired login token
- `422 Unprocessable Entity`: Request failed to pass semantic validations

### Endpoints
### `GET /display/companies`
> Retrives Display configuration of table headers, and 
Dynamic form attributes

#### Response
``` json
{
    "formAttributes": [
        {
            "type": "string",
            "key": "string",
            "label": "string",
            "placeholder": "string",
            "required": boolean, 
            "items": [ { "text": "string" "value": "string" } ],
        }
    ],
    "tableHeaders": [
        { "text": "string", "value": "string"}
    ]
}
```


### `GET /companies`
> Retrieves paginated list of companies
#### Query Parameters:
- __`offset`__ : {default: 0} page offset company index
- __`limit`__ : {default: 10, max: 100} max number of companies per page
#### Response
``` json
{
    "companies": [
        {
            "companyId": "",
            "companyName": "",
            "createdAt": "",
            "updatedAt": "",
            // additional optional possible company attribues
            "2019": "",
            "language": ""
        },
        // ... other companies
    ]
    "pager": {
        "prev": null, // link to previous page API URL
        "next": null, // link to next page API URL
    }
}
```

### `POST /companies`
> Creates a new company based on the attributes passed in request body
#### Body
``` json
{
    "companyName": "",
    // possible optional additional fields
    "language": ""
}
```
#### Response
1. `200 OK`: return an object of created company
``` json 
{
    "companyId": "",
    "companyName": "",
    "createdAt": "",
    "updatedAt": "",
    "language": ""
},
```

### `PUT /company/{companyId}`
> Modifies company details based on the attributes passed in request body
#### Body
``` json
{
    // optional attributes to be modified in company data
    "companyName": "new name",

}
```
#### Response
- `200 OK`: return an object of company after changes
``` json 
{
    "companyId": "",
    "companyName": "new name",
    "createdAt": "",
    "updatedAt": "",
    "language": ""
},
```
- `404 Not Found`: id URL parameter `companyId` wasn't valid companyId

### `DELETE /company/{companyId}`
> Deletes company with matching companyId or return `404`
#### Response
- `200` OK
- `404` NOT FOUND